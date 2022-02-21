import { React, ReactDOM } from 'react';
import { Map, MapMarker, Circle, Ellipse, Polyline, Polygon, Rectangle } from 'react-kakao-maps-sdk';

import OpenRunCourse from "../dataExample/openRun/OpenRunData.json";

const json = OpenRunCourse;
const coords = json[0].p_coordinates;
const coords2 = json[1].p_coordinates;

console.log(coords2);

let coordsArray1 = [];
for (var k in coords){
  coordsArray1[k] = {lat: coords[k][1], lng: coords[k][0]}
}

let coordsArray2 = [];
for (var k in coords2){
  coordsArray2[k] = {lat: coords2[k][1], lng: coords2[k][0]}
}

// console.log(coordsMap1);
// console.log(coordsMap2);

// var array0 = [];
// // console.log(coords);
// for (var k in coords){
//     array0.push("new navermaps." + "LatLng(" + coords[k][0] + ", " + coords[k][1] + ")");
// }
// console.log(array0);
// console.log(json[0].p_coordinates[2]);


// function NewPolygon(){
//     for (var k in coords){
//         new navermaps.LatLng(coords[k][0] +", "+ coords[k][1]);
//     }
// }


export default function KakaoMapPolyline(){
    return (
      <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.5790538,
        lng: 126.9796002,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
      }}
      level={8} // 지도의 확대 레벨
    >
      <Polyline
        path={
          [coordsArray1]
          // ,
          // [coordsArray2]
        }
        strokeWeight={7} // 선의 두께 입니다
        strokeColor={"red"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />
      
      <Polyline
        path={
          // [coordsArray1]
          // ,
          [coordsArray2]
        }
        strokeWeight={7} // 선의 두께 입니다
        strokeColor={"red"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />
    
    </Map>
    )
  }