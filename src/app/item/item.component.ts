import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {


  data: any;

  images : any = [
    {img: "https://www.bigbasket.com/media/uploads/p/s/10000067_23-fresho-capsicum-green.jpg?tr=w-256,q=80"},
    {img: "https://www.bigbasket.com/media/uploads/p/s/10000067-2_32-fresho-capsicum-green.jpg?tr=w-256,q=80"},
    {img: "https://www.bigbasket.com/media/uploads/p/s/10000067-3_3-fresho-capsicum-green.jpg?tr=w-256,q=80"},
    {img: "https://www.bigbasket.com/media/uploads/p/s/10000067-4_2-fresho-capsicum-green.jpg?tr=w-256,q=80"},
    {img: "https://www.bigbasket.com/media/uploads/p/s/10000067-5_1-fresho-capsicum-green.jpg?tr=w-256,q=80"}
  ]


  
  constructor(private common: CommonService) {}

  ngOnInit(): void {
      this.data = this.common.getProductItem()

      console.log(this.data)

  }
}
