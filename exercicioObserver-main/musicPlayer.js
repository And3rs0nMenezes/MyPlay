const musicPlayer = {
    audio: new Audio(),
    isPlaying: false,
    play(musicPath) {
        if (!this.isPlaying) {
            this.audio.src = musicPath;
            this.audio.play();
            this.isPlaying = true;
            document.getElementById('musicDisplay').textContent = `Música atual: ${musicPath}`;
            document.getElementById('playButton').textContent = 'Pausar Música';
        } else {
            this.audio.pause();
            this.isPlaying = false;
            document.getElementById('playButton').textContent = 'Tocar Música';
        }
    },
    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
        document.getElementById('playButton').textContent = 'Tocar Música';
        document.getElementById('musicDisplay').textContent = 'Música atual: Nenhuma';
    },
    changeMusic(musicPath) {
        this.stop();
        this.play(musicPath);
    }
};

document.getElementById('playButton').addEventListener('click', () => {
    musicPlayer.play('D:/exercicioObserver-main/v2/songs/better-day.mp3');
});

document.getElementById('stopButton').addEventListener('click', () => {
    musicPlayer.stop();
});

document.getElementById('changeMusicButton').addEventListener('click', () => {
    const newMusicPath = 'D:/exercicioObserver-main/v2/songs/hey.mp3'; // Caminho da nova música
    musicPlayer.changeMusic(newMusicPath);
});