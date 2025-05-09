import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent {
  topics = [
    {
      category: 'Algorithms',
      content: [
        {
          name: 'Sorting Algorithms',
          leetcodeLink: 'https://leetcode.com/problems/sorting-algorithms/',
          youtubeLink: 'https://www.youtube.com/watch?v=0JX12Tga7XI',
          articleLink: 'https://www.example.com/sorting-article',
          level: "Easy",
          status: "Done"
        },
        {
          name: 'Dynamic Programming',
          leetcodeLink: 'https://leetcode.com/problems/dynamic-programming/',
          youtubeLink: 'https://www.youtube.com/watch?v=8LusJS5-AGo',
          articleLink: 'https://www.example.com/dp-article',
          level: "Medium",
          status: "In Progress"
        }
      ]
    },
    {
      category: 'Data Structures',
      content: [
        {
          name: 'Binary Trees',
          leetcodeLink: 'https://leetcode.com/problems/binary-tree/',
          youtubeLink: 'https://www.youtube.com/watch?v=H5z_DgLNNOA',
          articleLink: 'https://www.example.com/binary-trees-article',
          level: "Hard",
          status: "In Progress"
        },
        {
          name: 'Linked List',
          leetcodeLink: 'https://leetcode.com/problems/linked-list/',
          youtubeLink: 'https://www.youtube.com/watch?v=J0ZkIGrXqZ0',
          articleLink: 'https://www.example.com/linked-list-article',
          level: "Medium",
          status: "In Progress"
        }
      ]
    },
    {
      category: 'Databases',
      content: [
        {
          name: 'SQL Basics',
          leetcodeLink: 'https://leetcode.com/problems/sql-basics/',
          youtubeLink: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
          articleLink: 'https://www.example.com/sql-basics-article',
          level: "Hard",
          status: "In Progress"
        },
        {
          name: 'NoSQL Databases',
          leetcodeLink: 'https://leetcode.com/problems/nosql-databases/',
          youtubeLink: 'https://www.youtube.com/watch?v=gs6fvO2Tp0g',
          articleLink: 'https://www.example.com/nosql-databases-article',
          level: "Medium",
          status: "In Progress"
        }
      ]
    },
  ];



  goBack() {
    history.back()
  }

}
