import Image from "next/image";
import { Container, InfoContainer, TextContainer } from "./styles";
import examplePhoto from '../../../../assets/example.png';
import { ButtonsContainer } from "../../../../components/ButtonsContainer";
import { useEffect, useRef, useState } from "react";
import { MusicsProps, musicVector } from "../../../../lib/musicVector";

export function SmallPlayerBox() {
  const audioPlayer: any = useRef<any>()
  const progressBar: any = useRef()
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(audioPlayer?.current?.currentTime);
  const [audioDuration, setAudioDuration] = useState(0)
  const [musicIndex, setMusicIndex] = useState(1)
  const musics: MusicsProps[] = musicVector;

  const [selectedMusic, setSelectedMusic] = useState({
    id: musics[0].id,
    name: musics[0].name,
    artist: musics[0].artist,
  } as MusicsProps)

  function togglePlayPause() {
    setIsPlaying(!isPlaying)
    setProgress(audioPlayer?.current?.currentTime)
  }

  function nextMusic() {
    musics.map((music) => {
      if (musicIndex === music.id && musicIndex < 3) {
        setMusicIndex(state => state + 1)
        setSelectedMusic({
          id: musics[music.id].id,
          name: musics[music.id].name,
          artist: musics[music.id].artist,
        })
      }
    })
  }

  function previousMusic() {
    musics.map((music) => {
      if (musicIndex > 1 && musicIndex == music.id) {
        setMusicIndex(music.id - 1)
        setSelectedMusic({
          id: musics[music.id - 2].id,
          name: musics[music.id - 2].name,
          artist: musics[music.id - 2].artist,
        })
      }
    })
  }

  useEffect(() => {
    if (!audioPlayer.current) {
      return;
    }

    if (isPlaying) {
      audioPlayer.current.play()
    } else {
      audioPlayer.current.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    setAudioDuration(audioPlayer?.current?.duration)
    setProgress(audioPlayer.current.currentTime)

  }, [progress]);

  useEffect(() => {
    const timer = setInterval(() => setProgress(progress), 0.1);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <InfoContainer>
        <Image src={examplePhoto} width={84} height={84} alt={""} />
        <TextContainer>
          <strong>{selectedMusic.name}</strong>
          <span>{selectedMusic.artist}</span>
        </TextContainer>
      </InfoContainer>

      <audio ref={audioPlayer} src={`/a${musicIndex}.mp3`} preload="metadata"></audio>

      <ButtonsContainer
        togglePlayPause={togglePlayPause}
        isPlaying={isPlaying}
        nextMusic={nextMusic}
        previousMusic={previousMusic}
      />

    </Container>
  )
}