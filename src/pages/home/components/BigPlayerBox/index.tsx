import Image from "next/image";
import examplePhoto from '../../../../assets/example.png';
import { Container, InfoContainer } from "./styles";
import { useEffect, useRef, useState } from "react";
import { ButtonsContainer } from "../../../../components/ButtonsContainer";
import { ProgressBar } from "../../../../components/ProgressBar";
import { MusicsProps, musicVector } from "../../../../lib/musicVector";

export function BigPlayerBox() {

  const audioPlayer: any = useRef<any>()
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(audioPlayer!.current?.currentTime!);
  const [audioDuration, setAudioDuration] = useState(0)

  const [musicIndex, setMusicIndex] = useState(1)
  const musics: MusicsProps[] = musicVector;

  const [selectedMusic, setSelectedMusic] = useState({
    id: musics[0].id,
    name: musics[0].name,
    artist: musics[0].artist,
  } as MusicsProps)


  function nextMusic() {
    musics.map((music) => {
      if (musicIndex < 3 && musicIndex === music.id) {
        setMusicIndex(state => state + 1)
        setSelectedMusic({
          id: musics[musicIndex].id,
          name: musics[musicIndex].name,
          artist: musics[musicIndex].artist,
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

  function togglePlayPause() {
    setIsPlaying(!isPlaying)
    setProgress(audioPlayer?.current?.currentTime)
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
    const timer = setInterval(() => setProgress(progress), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <Image src={examplePhoto} width={189} height={189} priority alt={""} />
      <InfoContainer>
        <strong>{selectedMusic.name}</strong>
        <span>{selectedMusic.artist}</span>
      </InfoContainer>

      <audio ref={audioPlayer} src={`/a${musicIndex}.mp3`} preload="metadata"></audio>

      <ButtonsContainer
        togglePlayPause={togglePlayPause}
        isPlaying={isPlaying}
        nextMusic={nextMusic}
        previousMusic={previousMusic}
      />

      <ProgressBar
        duration={audioDuration}
        audioProgress={progress}
      />
    </Container>
  )
}