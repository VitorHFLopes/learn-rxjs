import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const scroll$ = fromEvent(document, 'scroll');
const progressBarElement = document.querySelector('.progress-bar');

function calculateScrollPercentage(element) {
  const { scrollHeight, scrollTop, clientHeight } = element;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const progress$ = scroll$
    .pipe(
        map(({ target }) =>
            calculateScrollPercentage(target.scrollingElement)),
    );

progress$.subscribe((scrollPercentage) => {
  progressBarElement.style.width = `${ scrollPercentage }%`;
});
