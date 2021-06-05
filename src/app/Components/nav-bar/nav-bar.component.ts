import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../_Services/github.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getReposSummary("GerniVisser");
    this.githubService.getRepoData("GerniVisser","Chess");
  }

}