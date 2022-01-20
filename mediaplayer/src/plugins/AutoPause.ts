import MediaPlayer from "../MediaPlayer";

class AutoPause {
    private threshold: number;
    private player: MediaPlayer;

    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this) //Se hace esto porque el this en handleIntersection es otro porque esta siendo llamado por otra funcion, entonces con bind se le dice que su this es el de la instancia
    }

    public run(player: MediaPlayer) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold //Porcentaje el cual el observer se dara cuenta si el objeto apenas le queda ese % para salir o entro ya ese %
        });

        observer.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handleVisibilitychange)
    }

    private handleIntersection(entries: IntersectionObserverEntry[] ) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }

    private handleVisibilitychange = () => {
        const isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}

export default AutoPause;