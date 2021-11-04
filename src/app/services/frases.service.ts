import { Injectable } from '@angular/core';
import { FrasesPipe } from './frases.pipe';

@Injectable({ providedIn: 'root' })
export class FrasesService{
    private pipe: FrasesPipe;
    constructor(){
        this.pipe = new FrasesPipe();
    }
    public converter(traducao: string):string{
        return this.pipe.transform(traducao);
    }
}