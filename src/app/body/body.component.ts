import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';


interface Images {
  name: string,
  currentPrice: string,
  originalPrice: string,
  img: string,
  percentage: string,
  subImg: SubImg[]
}
interface SubImg {
  img: string
}
interface ImagesLinks {
  img: string
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  title:string = 'bigbasket';
  left:string = "<";
  right:string = ">"

  items: Images[]= [
    {name: 'Capsicum - Green (Loose)', currentPrice: "$1", originalPrice: "$5", img: "https://www.bigbasket.com/media/uploads/p/m/10000067_23-fresho-capsicum-green.jpg?tr=w-2048,q=80", percentage: "30% OFF",
      subImg: [
        {img: "https://www.bigbasket.com/media/uploads/p/s/10000067_23-fresho-capsicum-green.jpg?tr=w-256,q=80"},
        {img: "https://www.bigbasket.com/media/uploads/p/s/10000067-2_32-fresho-capsicum-green.jpg?tr=w-256,q=80"},
        {img: "https://www.bigbasket.com/media/uploads/p/s/10000067-3_3-fresho-capsicum-green.jpg?tr=w-256,q=80"},
        {img: "https://www.bigbasket.com/media/uploads/p/s/10000067-4_2-fresho-capsicum-green.jpg?tr=w-256,q=80"},
        {img: "https://www.bigbasket.com/media/uploads/p/s/10000067-5_1-fresho-capsicum-green.jpg?tr=w-256,q=80"}
      ]
    },
    {name: 'Carrot - Orange (Loose)', currentPrice: "$4", originalPrice: "$44", img: "https://www.bigbasket.com/media/uploads/p/m/10000070_15-fresho-carrot-orange.jpg?tr=w-3840,q=80", percentage: "40% OFF", 
      subImg: [
        {img: "https://www.bigbasket.com/media/uploads/p/m/10000070_15-fresho-carrot-orange.jpg?tr=w-3840,q=80"},
        {img: "https://www.bigbasket.com/media/uploads/p/m/10000070_15-fresho-carrot-orange.jpg?tr=w-3840,q=80"},
        {img: "https://www.bigbasket.com/media/uploads/p/m/10000070_15-fresho-carrot-orange.jpg?tr=w-3840,q=80"},
      ]
     },
    {name: 'Cauliflower', currentPrice: "$11", originalPrice: "$20" , img: "https://www.bigbasket.com/media/uploads/p/m/10000074_19-fresho-cauliflower.jpg?tr=w-3840,q=80", percentage: "20% OFF", 
      subImg: [
        {img: "https://www.bigbasket.com/media/uploads/p/m/10000074_19-fresho-cauliflower.jpg?tr=w-3840,q=80"},
        {img: "https://www.bigbasket.com/media/uploads/p/m/10000074_19-fresho-cauliflower.jpg?tr=w-3840,q=80"},
        {img: "https://www.bigbasket.com/media/uploads/p/m/10000074_19-fresho-cauliflower.jpg?tr=w-3840,q=80"},
      ]
    },
    {name: 'Coriander Leaves', currentPrice: "$14", originalPrice: "$24", img: "https://www.bigbasket.com/media/uploads/p/m/10000326_14-fresho-coriander-leaves.jpg?tr=w-3840,q=80", percentage: "80% OFF",
    subImg: [
      {img: "https://www.bigbasket.com/media/uploads/p/m/10000326_14-fresho-coriander-leaves.jpg?tr=w-3840,q=80"},
      {img: "https://www.bigbasket.com/media/uploads/p/m/10000326_14-fresho-coriander-leaves.jpg?tr=w-3840,q=80"},
      {img: "https://www.bigbasket.com/media/uploads/p/m/10000326_14-fresho-coriander-leaves.jpg?tr=w-3840,q=80"},
    ]
    },
  ]
  addImageSources = [
    { add: "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_01.png?tr=w-3840,q=80"},
    { add: "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_02.png?tr=w-3840,q=80"},
    { add: "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_03.png?tr=w-3840,q=80"},
    { add: "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_04.png?tr=w-3840,q=80"},
    { add: "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_05.png?tr=w-3840,q=80"},
    { add: "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250923_06.png?tr=w-3840,q=80"}
  ];
  

  images: ImagesLinks[] = [
    {img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/3c5df782-1789-4bea-8403-9fd766652b34/t1_hp_aff_m_amex_110524.jpg?tr=w-3840,q=80"},
    {img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/3c5df782-1789-4bea-8403-9fd766652b34/t1_hp_aff_m_indus20_110524.jpg?tr=w-3840,q=80"},
    {img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/3c5df782-1789-4bea-8403-9fd766652b34/t1_hp_aff_m_icici-cc_110524.jpg?tr=w-3840,q=80"},
    {img: "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/3c5df782-1789-4bea-8403-9fd766652b34/t1_hp_aff_m_icici-amz_110524.jpg?tr=w-3840,q=80"},
  ];

  constructor(private router: Router, private common: CommonService) {

  }

  openItem(item: any) {
    this.common.setProductItem(item)
    window.open(`http://localhost:4200/product?`, '_blank');
  }

}
