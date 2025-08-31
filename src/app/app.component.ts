import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { catchError, concatMap, delay, from, mergeMap, of, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RestrictAccess';
  ngOnInit() {
    // const promise1 = new Promise((resolve) => {
    //   setTimeout(() => resolve("First done"), 5000);
    // });

    // const promise2 = new Promise((resolve) => {
    //   setTimeout(() => resolve("Second done"), 1500);
    // });

    // const promise3 = new Promise((resolve) => {
    //   setTimeout(() => resolve("Third done"), 500);
    // });

    // Promise.all([promise1, promise2, promise3])
    //   .then(results => {
    //     console.log("All promises resolved:", results);
    //   })
    //   .catch(err => {
    //     console.error("At least one promise failed:", err);
    //   });

    // const urls: any[] = [
    //   "https://jsonplaceholder.typicode.com/posts/1",
    //   "https://jsonplaceholder.typicode.com/users/1"
    // ];

    // Promise.all(urls.map((url: any) => fetch(url).then(res => res.json())))
    //   .then((data: any) => {
    //     console.log("Data from all APIs:", data);
    //   })
    //   .catch((err: any) => {
    //     console.error("API call failed:", err);
    //   });

    // const promise11 = Promise.resolve("Success 1");
    // const promise22 = Promise.reject("Something went wrong");
    // const promise33 = Promise.resolve("Success 3");

    // Promise.all([promise11, promise22, promise33])
    //   .then(results => {
    //     console.log("This will not run");
    //   })
    //   .catch(err => {
    //     console.error("Error occurred:", err);
    //   });
    const source = from([1, 2, 3]);

//     source.pipe(
//       mergeMap(val => of(val * 2).pipe(delay(1000)))
//     ).subscribe({
//       next: val => console.log("mergeMap result:", val),
//       complete: () => console.log("All done!")
//     });

//     source.pipe(
//   concatMap(val => of(val * 2).pipe(delay(1000)))
    // ).subscribe({
    //   next: val => console.log("concatMap result:", val),
    //   complete: () => console.log("All done!")
    // });
   source.pipe(
      concatMap(val => {
        if (val === 2) return throwError(() => new Error("Oops!"));
        return of(val * 2);
      }),
      catchError(err => {
        console.error("Caught error:", err.message);
        return of("Fallback value");
      })
    ).subscribe(val => console.log("Received:", val));
  }
}
