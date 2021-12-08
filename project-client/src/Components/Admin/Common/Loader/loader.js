import * as music from '../../Config/34970-music-animation.json'
import * as success from '../../Config/25176-success.json'
import * as frog from '../../Config/25949-frog-emote.json'

export  default function  Loader(type) {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: success.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    switch (type) {
        case 1: {
            defaultOptions.animationData = music.default
            return defaultOptions
        }
        case 2:{
            defaultOptions.animationData = frog.default
            return defaultOptions
        }
        default: {
            defaultOptions.animationData = success.default
            return defaultOptions
        }
    }
}
