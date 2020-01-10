import { install } from '@pixi/unsafe-eval'

export default function (PIXI: any) {
    if (typeof eval !== 'function') install(PIXI)
    PIXI.Renderer.create = (options: object) => {
        return new PIXI.Renderer(options)
    }
}
