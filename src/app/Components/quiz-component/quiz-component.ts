import { Component, computed, signal } from '@angular/core';
import { Question, Topic } from '../Question.data';
import { Subject, SUBJECTS } from './Subjects';

@Component({
  selector: 'app-quiz-component',
  imports: [],
  templateUrl: './quiz-component.html',
  styleUrl: './quiz-component.scss',
})
export class QuizComponent {
  readonly letters = ['ა', 'ბ', 'გ', 'დ', 'ე'];
  readonly subjects: Subject[] = SUBJECTS;

  subject = signal<Subject | null>(null);
  topic = signal<Topic | null>(null);
  questions = signal<Question[]>([]);
  index = signal(0);
  picked = signal<number | null>(null);
  score = signal(0);
  finished = signal(false);

  topics = computed(() =>
    (this.subject()?.topics ?? []).filter(t => t.questions.length > 0));
  current = computed(() => this.questions()[this.index()]);
  progress = computed(() =>
    this.questions().length ? (this.index() / this.questions().length) * 100 : 0);
  isLast = computed(() => this.index() === this.questions().length - 1);

  questionCount(s: Subject): number {
    return s.topics.reduce((sum, t) => sum + t.questions.length, 0);
  }

  selectSubject(s: Subject): void {
    this.subject.set(s);
    this.topic.set(null);
  }

  backToSubjects(): void {
    this.subject.set(null);
    this.topic.set(null);
  }

  start(topic: Topic, shuffle = false): void {
    const list = [...topic.questions];
    if (shuffle) {
      for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
      }
    }
    this.topic.set(topic);
    this.questions.set(list);
    this.index.set(0);
    this.picked.set(null);
    this.score.set(0);
    this.finished.set(false);
  }

  choose(i: number): void {
    if (this.picked() !== null) return;
    this.picked.set(i);
    if (i === this.current().correct) this.score.update(s => s + 1);
  }

  next(): void {
    if (this.isLast()) {
      this.finished.set(true);
      return;
    }
    this.index.update(i => i + 1);
    this.picked.set(null);
  }

  restart(): void {
    const t = this.topic();
    if (t) this.start(t);
  }

  backToTopics(): void {
    this.topic.set(null);
  }

  optionState(i: number): string {
    const p = this.picked();
    if (p === null) return '';
    if (i === this.current().correct) return 'correct';
    if (i === p) return 'wrong';
    return 'dim';
  }
}