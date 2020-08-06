import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../core/services/api/api.service';
import {Constants} from '../../../core/contants';
import {animation} from '../../animations/animation';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css'],
    animations: animation
})
export class QuizComponent implements OnInit {
    dataLoaded = false;
    quizData: object;
    finished = false;
    constants = Constants;
    showingAnswer: boolean;
    answerCorrect: boolean;
    actualAnswer: string;

    constructor(private apiService: ApiService) {
    }

    ngOnInit(): void {
        this.apiService.startQuiz().toPromise().then(
            response => {
                this.handleData(response);
            }
        );
    }

    handleData(data): void {
        if (data.nextQuestion) {
            if (data.nextQuestion.correctAnswers) {
                this.finished = true;
            }
            this.dataLoaded = true;
            this.quizData = data.nextQuestion;
            this.answerCorrect = data.correct;
            this.actualAnswer = data.answer;
        } else {
            if (data.correctAnswers) {
                this.finished = true;
            }
            this.dataLoaded = true;
            this.quizData = data;
        }
    }

    sendAnswer(answer: number): void {
        this.dataLoaded = false;
        this.apiService.sendAnswer(answer).toPromise().then(
            response => {
                this.showingAnswer = true;
                this.handleData(response);
            }
        );
    }

    restartQuiz(): void {
        this.dataLoaded = false;
        this.apiService.restartQuiz().toPromise().then(
            response => {
                this.finished = false;
                this.handleData(response);
            }
        );
        this.nextQuestion();
    }

    nextQuestion(): void {
        this.showingAnswer = false;
    }
}
