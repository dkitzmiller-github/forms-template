import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

    powers = ['', 'Really Smart', 'Flexible', 'Super Hot', 'Weather Changer', 'News Synthesizer'];
    model = new Hero('123', 'Gumby', this.powers[0], 'Greg Kitzmiller');
    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    // ToDo: Remove this when done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    constructor() {
    }

    ngOnInit() {
    }

    newHero() {
        this.model = new Hero('124', '', '', 'Warren Buffet');
    }
}
