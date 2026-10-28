import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizComponent } from './Components/quiz-component/quiz-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuizComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('BugaltruliAgricxvaQuiz');
}
