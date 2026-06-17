import { Component } from '@angular/core';

interface SkillsItem {
  skill_name: string;
  skill_des: string;
  skill_logo: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {
  activeTab: string = 'skls';

  switchTab(tab: string): void {
    this.activeTab = tab;
  }

  skills: SkillsItem[] =[
    { skill_name: 'Python', skill_des: 'Python sits at the core of my backend work, from automation' +
       'scripts and ETL pipelines to data exploration in Jupyter Notebooks. I have developed across' +
       'multiple environments including VS Code and Eclipse, applying it wherever clean, readable logic' +
       'matters most.', skill_logo: 'python.png' },
    { skill_name: 'SQL', skill_des: 'SQL drives my data layer work, from writing complex queries and' +
      'transformations to managing relational databases in PostgreSQL and Sybase. I have applied it across' +
      'reporting pipelines and data validation workflows, prioritizing clarity and performance in every query', 
      skill_logo: 'sql.png' },
    { skill_name: 'TypeScript', skill_des: 'TypeScript powers my frontend and full-stack development, from' +
       'structuring JSON data and extending JavaScript logic to building dynamic web applications with the Angular' +
       'framework. I have applied it across component-driven UIs and service layers, leveraging its strong typing' +
       'to write more reliable, maintainable code.', skill_logo: 'typescript.webp' },
    { skill_name: 'Linux', skill_des: 'Linux underpins my development environment, from navigating the command line' +
       'and managing file systems to configuring servers and running automated scripts. I have applied it across local' +
       'development workflows and development pipelines, relying on its flexibility and control to get things done efficiently.', 
       skill_logo: 'linux.jpeg' },
    { skill_name: 'Postman', skill_des: 'Postman is my go-to tool for API development and testing, from crafting and debugging' +
       'HTTP requests to validating endpoint responses across development and UAT environments. I have applied it throughout' +
       'backend integration work, using it to ensure APIs behave as expected before and after deployment', 
       skill_logo: 'postman.jpeg' },
    { skill_name: 'Excel', skill_des: 'Excel extends my data toolkit beyond code, from organizing and cleaning datasets to' +
       'building reports and performing ad-hoc analysis. I have worked extensively with CSV files, using Excel to inspect' +
       'transform, and validate data as part of broader ingestion and reporting workflows.', 
       skill_logo: 'excel.jpeg' }
  ];
}