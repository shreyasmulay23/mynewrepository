import { PipeTransform, Pipe } from 'angular2/core'

@Pipe({ name: 'ellipsis' })
export class Ellipsis implements PipeTransform {
    transform(text: string, config: any[]) {
        if (config.length == 0 || text.length == 0) {
            return text;
        }
        if (!config[0]) {
            config[0] = 4;
        }

        if (!config[1]) {
            config[1] = '.'
        }
        
        if (!isNaN(config[0])) {
            if (text && text.length > config[0]) {
                return text.substr(0, config[0]) + config[1] + config[1] + config[1];
            }
        }
        return text;
    }
}