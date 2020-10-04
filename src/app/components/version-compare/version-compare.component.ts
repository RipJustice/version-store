import { Component, OnInit } from '@angular/core';
import compareVersions from 'compare-versions';

@Component({
  selector: 'app-version-compare',
  templateUrl: './version-compare.component.html',
  styleUrls: ['./version-compare.component.scss']
})
export class VersionCompareComponent implements OnInit {

  storedVersions: any[];
  returnedVersions = [];
  error: boolean;
  errorMessage: string;

  constructor() { }

  ngOnInit(): void {
    this.storedVersions = [
      {
        name: 'MS Word',
        version: '13.2.1.'
      },
      {
        name: 'MS Excel',
        version: '13.4.2'
      },
      {
        name: 'AngularJS',
        version: '1.7.1'
      },
      {
        name: 'Angular',
        version: '8.1.13'
      },
      {
        name: 'React',
        version: '0.0.5'
      },
      {
        name: 'Vue.js',
        version: '2.6'
      },
      {
        name: 'Ember.js',
        version: '3.10.1'
      },
      {
        name: 'Visual Studio Code',
        version: '1.39.2'
      },
      {
        name: 'Atom',
        version: '1.41.0'
      },
      {
        name: 'Sublime',
        version: '3.12.0'
      },
      {
        name: 'DataGrip',
        version: '2019.2.6'
      }
    ];
    this.error = false;
    this.errorMessage = 'Please Type in a valid Version Number';
  }

  generateList( input: string ): void {
    if ( input !== '' && input.match('^(\\d+\\.)?(\\d+\\.)?(\\*|\\d+)$') ) {
      this.returnedVersions = this.storedVersions.filter(d => {
        if (d.version.slice(-1) === '.') {
          if (compareVersions.compare(d.version + '0', input, '>')) {
            return d;
          }
        } else {
          if (compareVersions.compare(d.version, input, '>')) {
           return d;
          }
        }
      });
      this.error = false;
    } else {
      this.error = true;
      this.returnedVersions = [];
    }
  }

}
