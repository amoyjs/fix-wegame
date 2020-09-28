import { install } from '@pixi/unsafe-eval'

export default function fixWeGame({ event }: any) {
    event.on('beforeCreate', ({ PIXI }) => {
        if (typeof eval !== 'function') install(PIXI)
        PIXI.Renderer.create = (options: object) => {
            return new PIXI.Renderer(options)
        }
    })
}

export function deprecatedFixWeGame(PIXI: any) {
    if (typeof eval !== 'function') install(PIXI)
    PIXI.Renderer.create = (options: object) => {
        return new PIXI.Renderer(options)
    }
}
