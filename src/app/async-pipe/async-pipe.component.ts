import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

  MonObservable = new Observable(
    (data) => {
      let i = 5
      var Images = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
      'https://media.istockphoto.com/photos/colorful-sunset-at-davis-lake-picture-id1184692500?b=1&k=6&m=1184692500&s=170667a&w=0&h=jzDBoyH7_YZVp2depWZ_kb5Su4VnrlzabvjD95yTHpU=',
      'https://cdn.pixabay.com/photo/2014/02/27/16/10/spring-276014__180.jpg',
      'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg',
      'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287__340.jpg',
      'https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080__340.jpg']
      setInterval(
        () => {
          if (i === -1) {
            i = 5
          }
          data.next(Images[i--])
        }, 2000
      )
    }
  )

  constructor() { }

  ngOnInit(): void {
  }

}
