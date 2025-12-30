(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.54,
  "pitch": 13.96
 },
 "id": "panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7919C981_6B23_0124_41D0_6B33266EE144"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "Labour Room",
 "id": "panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_66B4B262_7DAE_E5CF_41D7_75DEB149AA7E",
  "this.overlay_616C8DC5_7DAE_BED5_41C0_C57E0C55CFEB",
  "this.overlay_68391E90_7DFF_BFCE_4192_137D67852618",
  "this.overlay_659DF795_7DC0_ADF6_41DC_B9B4EF87DBE3"
 ]
},
{
 "thumbnailUrl": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "Speech Therapy Room",
 "id": "panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5E41F33A_7E40_E532_41C0_14B4EBF91805",
  "this.overlay_5F7B6C3B_7E4F_A332_41D4_61A4F3800EEF"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "yaw": 44.71,
  "pitch": 4.15
 },
 "id": "panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "Accident and Emergency Ward",
 "id": "panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_672B5E2F_7D52_7D54_41CB_7D85E0BC9C44",
  "this.overlay_686F8B27_7DC0_E6D2_41D6_DA20D972682C"
 ]
},
{
 "thumbnailUrl": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "NICU",
 "id": "panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_654C8C6A_7DBF_9DDF_41C8_02B4AB9E2C1C",
  "this.overlay_72A4F86D_7D92_53D6_41C4_84EEDA2A1E25",
  "this.overlay_6803194A_7DC0_6552_41DF_53505F1B9E93",
  "this.overlay_66004515_7DC0_62F6_4161_88F67DBC430F"
 ]
},
{
 "thumbnailUrl": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7919C981_6B23_0124_41D0_6B33266EE144"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "Department of Medicine ",
 "id": "panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_682A36E6_7DC3_AF52_41D7_DB3D8D2C98B9",
  "this.overlay_6843B683_7DC0_6FD2_41C8_E027366B3262",
  "this.overlay_6A4896FF_7DC0_6F32_41CD_03099B128F34",
  "this.overlay_6A32BCAE_7DC0_A3D2_41D8_722904C88259"
 ]
},
{
 "thumbnailUrl": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "ICU Cont.",
 "id": "panorama_70775A34_7D5E_654B_41DE_15F01A4CC530",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_732146FA_7DC0_6F32_41C9_5A8D3CD00738"
 ]
},
{
 "thumbnailUrl": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "CT SCAN",
 "id": "panorama_7074185A_7D5E_A5FF_4145_89357997DAD0",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_689BA4AB_7D52_6D5D_41BE_2D1C15A0EC03"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 34.12,
  "pitch": 2.78
 },
 "id": "panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "yaw": 90.41,
  "pitch": 0.49
 },
 "id": "panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "Blood Donation Room",
 "id": "panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6C9EAE18_7DC3_9EFE_41CE_8BF8579E48E4",
  "this.overlay_6EA2086F_7DC0_A352_41B3_9DB2BF1DD214",
  "this.overlay_6D6DA080_7DC0_A3CE_41C6_60267BFCCF48",
  "this.overlay_6DB8B579_7DC0_AD3E_41D4_FF7079C5EFBA"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7919C981_6B23_0124_41D0_6B33266EE144_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_7919C981_6B23_0124_41D0_6B33266EE144",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_7074185A_7D5E_A5FF_4145_89357997DAD0",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_70775A34_7D5E_654B_41DE_15F01A4CC530",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 0)",
   "media": "this.panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 79.53,
  "pitch": 13.03
 },
 "id": "panorama_7919C981_6B23_0124_41D0_6B33266EE144_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 124,
  "class": "PanoramaCameraPosition",
  "yaw": 179.19,
  "pitch": 0.82
 },
 "id": "panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "yaw": -30.35,
  "pitch": -19.25
 },
 "id": "panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 148.66,
  "pitch": 1.22
 },
 "id": "panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "Stage III",
 "id": "panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6030BD3E_7DB1_9FB7_41DE_4E89364B17D7"
 ]
},
{
 "thumbnailUrl": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "Blood Lab and Blood Bank",
 "id": "panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_71671843_7E26_56F7_417C_A5D772124356"
 ]
},
{
 "thumbnailUrl": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "X-RAY ROOM",
 "id": "panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6B28F308_7D5E_EB5B_41BD_252F880FB4F3"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "yaw": 49.33,
  "pitch": 2.82
 },
 "id": "panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 48.06,
  "pitch": -0.16
 },
 "id": "panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "Physiotherapy Room",
 "id": "panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6088ABCB_7E40_E553_418D_0740B4D0E472",
  "this.overlay_60C21525_7E41_E2D6_41D8_67B547029A5B",
  "this.overlay_60BA9336_7E40_6535_41B6_B783AB590B89",
  "this.overlay_6161710B_7E40_E2D3_41C5_A4B30E803D6C"
 ]
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0
  }
 ],
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 120,
  "class": "PanoramaCameraPosition",
  "yaw": -177.19,
  "pitch": -2.5
 },
 "id": "panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 174.28,
  "pitch": 2
 },
 "id": "panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_7919C981_6B23_0124_41D0_6B33266EE144",
 "label": "Lobby",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7AD154AE_6B21_077C_41DA_009DDB15F511",
  "this.overlay_7AA0A8AD_6B27_0F7D_41D1_63FDEEC46DF9",
  "this.overlay_7AD8E5E5_6B27_00ED_41C8_970DAC3AD748",
  "this.overlay_7AD69907_6B21_012D_41C8_3AAFDFF073FE",
  "this.overlay_7928D96C_6B23_01E3_41AB_34EE959B3455",
  "this.overlay_7E72F8E6_6B23_00EF_41AD_985DF6C285EA",
  "this.overlay_7AE8ED71_6B21_01E5_41C8_15F5AEB91B97"
 ]
},
{
 "thumbnailUrl": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7919C981_6B23_0124_41D0_6B33266EE144"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "Operation Theater",
 "id": "panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6AA978A2_7E5A_37B1_41CF_D8BDFB710A4A",
  "this.overlay_6B04A2F7_7E5B_FB9F_41D2_20800EEEC854"
 ]
},
{
 "thumbnailUrl": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "Ultrasound Room",
 "id": "panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87",
 "pitch": 0,
 "partial": false,
 "hfovMax": 133,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6B65E93B_7D5E_67BD_41DE_DCC75501D053"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "yaw": 7.77,
  "pitch": 7.17
 },
 "id": "panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7919C981_6B23_0124_41D0_6B33266EE144"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "Outside Aerial",
 "id": "panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7DFCD9A8_6B23_0163_41C0_5CE8BAB1A6E2",
  "this.overlay_7DEEE6BF_6B21_035D_41AF_C870D2121FB4",
  "this.overlay_7C2B8C29_6B21_0764_41D9_2CFD967B99B1",
  "this.overlay_7119BA17_6B21_032C_41DA_2C8E4C7F199F"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 125,
  "class": "PanoramaCameraPosition",
  "yaw": 84.93,
  "pitch": 3.68
 },
 "id": "panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 99.99,
  "pitch": -1.24
 },
 "id": "panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7074185A_7D5E_A5FF_4145_89357997DAD0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7919C981_6B23_0124_41D0_6B33266EE144"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "Radiology Enterance",
 "id": "panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_691DB5F8_7D52_AEBB_41D1_268A93FF1AC5",
  "this.overlay_65A0187C_7D52_65BB_41D6_8E93CFCA67BE",
  "this.overlay_6B2A779A_7D52_6B7F_41D7_766576D6C7C9",
  "this.overlay_64469F86_7D53_9B57_41D1_A6173291657F",
  "this.overlay_648BC1CE_7DC0_6552_41B3_3292F286C92A",
  "this.overlay_68B8733D_7DC7_A536_41D0_AD01C9C74572",
  "this.overlay_685C1FA0_7DC0_BDCE_41CA_1FEA95FF4F41"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 123,
  "class": "PanoramaCameraPosition",
  "yaw": 53.47,
  "pitch": 6.52
 },
 "id": "panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.79,
  "pitch": 8.43
 },
 "id": "panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 32.39,
  "pitch": 7.17
 },
 "id": "panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7919C981_6B23_0124_41D0_6B33266EE144_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_7919C981_6B23_0124_41D0_6B33266EE144",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_7074185A_7D5E_A5FF_4145_89357997DAD0",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "media": "this.panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "media": "this.panorama_70775A34_7D5E_654B_41DE_15F01A4CC530",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "media": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "media": "this.panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "media": "this.panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "media": "this.panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "media": "this.panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 0)",
   "media": "this.panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "thumbnailUrl": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7919C981_6B23_0124_41D0_6B33266EE144"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "1ST Floor Private Block",
 "id": "panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_72F6A1D0_7DC0_E54E_41CD_9547FF6CFACC",
  "this.overlay_72895683_7DC0_AFD2_41D6_57E7B0EC8389",
  "this.overlay_6BB19F2B_7DCF_9ED3_41DA_7E7AF6E84847",
  "this.overlay_6BDFF338_7DC0_653D_41C8_EB50DA387775",
  "this.overlay_672EB391_7DC0_65CE_41DB_43C7354A7365",
  "this.overlay_6764E76C_7DC1_ED56_41D8_A802136E7210",
  "this.overlay_62C60345_7E40_E556_41D0_CD6B2A64008B",
  "this.overlay_5FD7C453_7E43_E372_41AC_4476F5CC365E",
  "this.overlay_63B9DFF3_7E43_BD32_41D5_D5F6533735C2"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 122,
  "class": "PanoramaCameraPosition",
  "yaw": -107.67,
  "pitch": -15.23
 },
 "id": "panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 47.77,
  "pitch": 6.79
 },
 "id": "panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70775A34_7D5E_654B_41DE_15F01A4CC530"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "ICU",
 "id": "panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_73DE91D4_7DC0_A576_41D4_569F9BE19AB0",
  "this.overlay_6B9C536D_7DC0_A556_41CA_F2240982699E",
  "this.overlay_6A720133_7DC0_E532_41B5_95408E105A92"
 ]
},
{
 "thumbnailUrl": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "Laboratories",
 "id": "panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6CE9A4D1_7DC0_634E_41C0_E244F1BE4B23",
  "this.overlay_6DF1412F_7DC0_62D2_41D1_42FC49B4E527",
  "this.overlay_6E40D8D5_7DC1_E377_41D6_96A12D36A7F9",
  "this.overlay_6C8CCA2D_7DC0_A6D6_41B9_E0D01E4B15CE"
 ]
},
{
 "thumbnailUrl": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC"
  }
 ],
 "hfovMin": "400%",
 "hfov": 360,
 "label": "PEADS WARD",
 "id": "panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_t.jpg",
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 8,
      "tags": "ondemand",
      "colCount": 8,
      "width": 4096,
      "height": 4096
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_64BFCB62_7D56_9BCF_41B3_5B37CDC6AB7D",
  "this.overlay_67ABDAA2_7DC1_A7D2_41D0_130C857851E7"
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 0.5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "minHeight": 50,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "scrollBarVisible": "rollOver",
 "width": 330,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "100%",
 "layout": "absolute",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "bottom": "0%",
 "contentOpaque": false,
 "top": "0%",
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "minHeight": 1,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "paddingTop": 0,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "right": "1.61%",
 "width": 58,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "top": "2.43%",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "verticalAlign": "middle",
 "mode": "toggle",
 "height": 58,
 "maxWidth": 58,
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "maxHeight": 58
},
{
 "fontFamily": "Segoe Print",
 "data": {
  "name": "Label42068"
 },
 "textShadowVerticalLength": 1,
 "left": "100%",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "id": "Label_C559C0ED_E037_F703_41C7_659205F9FE23",
 "right": "0%",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "text": "Developed by:",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "textShadowOpacity": 0.54,
 "textShadowColor": "#000000",
 "bottom": "3.31%",
 "verticalAlign": "middle",
 "height": "4.52%",
 "fontSize": "2vmin",
 "minHeight": 1,
 "paddingTop": 0,
 "textShadowBlurRadius": 3,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "textShadowHorizontalLength": 1,
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 06a Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 34.92,
   "image": "this.AnimatedImageResource_1C730FCB_0904_BE09_4180_AC2CF04D80AF",
   "pitch": -0.44,
   "yaw": 5.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_66B4B262_7DAE_E5CF_41D7_75DEB149AA7E",
 "maps": [
  {
   "hfov": 34.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ]
   },
   "pitch": -0.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.85,
   "image": "this.AnimatedImageResource_1C737FCB_0904_BE09_4198_C8DCA20C4701",
   "pitch": -48.73,
   "yaw": 146.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_616C8DC5_7DAE_BED5_41C0_C57E0C55CFEB",
 "maps": [
  {
   "hfov": 25.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -48.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 67.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 2048,
      "height": 728
     }
    ]
   },
   "pitch": -16.77,
   "yaw": 15.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_68391E90_7DFF_BFCE_4192_137D67852618",
 "data": {
  "label": "EXIT TO MAIN LOBBY"
 },
 "maps": [
  {
   "hfov": 67.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_1_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 45,
      "height": 16
     }
    ]
   },
   "pitch": -16.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 29.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 1686,
      "height": 266
     }
    ]
   },
   "pitch": -54.84,
   "yaw": 126.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_659DF795_7DC0_ADF6_41DC_B9B4EF87DBE3",
 "data": {
  "label": "STAGE III ROOM"
 },
 "maps": [
  {
   "hfov": 29.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 101,
      "height": 16
     }
    ]
   },
   "pitch": -54.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.81,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 523,
      "height": 556
     }
    ]
   },
   "pitch": -2.83,
   "yaw": -98.48
  }
 ],
 "id": "overlay_5E41F33A_7E40_E532_41C0_14B4EBF91805",
 "maps": [
  {
   "hfov": 15.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": -2.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 24.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 830,
      "height": 224
     }
    ]
   },
   "pitch": -12.12,
   "yaw": -90.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_5F7B6C3B_7E4F_A332_41D4_61A4F3800EEF",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "hfov": 24.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707C321B_7D5F_E57D_41D0_A62A08BDF207_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 16
     }
    ]
   },
   "pitch": -12.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.31,
   "image": "this.AnimatedImageResource_1C710FCB_0904_BE09_4190_A0C849F67820",
   "pitch": -40.65,
   "yaw": 148.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_672B5E2F_7D52_7D54_41CB_7D85E0BC9C44",
 "maps": [
  {
   "hfov": 32.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 148.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -40.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 48.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 1628,
      "height": 348
     }
    ]
   },
   "pitch": -12,
   "yaw": 174.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_686F8B27_7DC0_E6D2_41D6_DA20D972682C",
 "data": {
  "label": "EXIT"
 },
 "maps": [
  {
   "hfov": 48.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 74,
      "height": 16
     }
    ]
   },
   "pitch": -12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.95,
   "image": "this.AnimatedImageResource_1C75AFCB_0904_BE09_4198_80978A5753CD",
   "pitch": -20.05,
   "yaw": -12.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_654C8C6A_7DBF_9DDF_41C8_02B4AB9E2C1C",
 "maps": [
  {
   "hfov": 26.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -20.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 35.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 1398,
      "height": 430
     }
    ]
   },
   "pitch": -32.58,
   "yaw": -8.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_72A4F86D_7D92_53D6_41C4_84EEDA2A1E25",
 "data": {
  "label": "Towards ICU"
 },
 "maps": [
  {
   "hfov": 35.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_1_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 52,
      "height": 16
     }
    ]
   },
   "pitch": -32.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 60.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 2048,
      "height": 340
     }
    ]
   },
   "pitch": -15.48,
   "yaw": -120.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6803194A_7DC0_6552_41DF_53505F1B9E93",
 "data": {
  "label": "EXIT "
 },
 "maps": [
  {
   "hfov": 60.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 96,
      "height": 16
     }
    ]
   },
   "pitch": -15.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Arrow 07"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.07,
   "image": "this.AnimatedImageResource_1C756FCB_0904_BE09_4197_B795C8317F6F",
   "pitch": -3.71,
   "yaw": -146.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_66004515_7DC0_62F6_4161_88F67DBC430F",
 "maps": [
  {
   "hfov": 25.07,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -146.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 50.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 1901,
      "height": 397
     }
    ]
   },
   "pitch": -28.63,
   "yaw": -152.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_682A36E6_7DC3_AF52_41D7_DB3D8D2C98B9",
 "data": {
  "label": "Towards Labour Room"
 },
 "maps": [
  {
   "hfov": 50.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 76,
      "height": 16
     }
    ]
   },
   "pitch": -28.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 07"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.88,
   "image": "this.AnimatedImageResource_1C702FCB_0904_BE09_418B_EF6C86FEE46A",
   "pitch": -1.03,
   "yaw": -140.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6843B683_7DC0_6FD2_41C8_E027366B3262",
 "maps": [
  {
   "hfov": 21.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -140.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.24,
   "image": "this.AnimatedImageResource_1C739FCB_0904_BE09_4195_6F14B5A137B5",
   "pitch": -45.43,
   "yaw": -147.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6A4896FF_7DC0_6F32_41CD_03099B128F34",
 "maps": [
  {
   "hfov": 23.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -147.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -45.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 25.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 830,
      "height": 830
     }
    ]
   },
   "pitch": -1.95,
   "yaw": -133.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6A32BCAE_7DC0_A3D2_41D8_722904C88259",
 "data": {
  "label": "EXIT"
 },
 "maps": [
  {
   "hfov": 25.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_1_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.11,
   "image": "this.AnimatedImageResource_1C750FCD_0904_BE09_4197_C24770115794",
   "pitch": -36.24,
   "yaw": -139.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_732146FA_7DC0_6F32_41C9_5A8D3CD00738",
 "maps": [
  {
   "hfov": 24.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -36.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.65,
   "image": "this.AnimatedImageResource_1C4E3FCB_0904_BE09_41A1_C17645B439CD",
   "pitch": -49.43,
   "yaw": 5.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_689BA4AB_7D52_6D5D_41BE_2D1C15A0EC03",
 "maps": [
  {
   "hfov": 25.65,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -49.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.75,
   "image": "this.AnimatedImageResource_1C788FCE_0904_BE0B_4178_0C61D00E646A",
   "pitch": -32.65,
   "yaw": 19.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6C9EAE18_7DC3_9EFE_41CE_8BF8579E48E4",
 "maps": [
  {
   "hfov": 17.75,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -32.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 49.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 2048,
      "height": 332
     }
    ]
   },
   "pitch": -42.52,
   "yaw": 42.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6EA2086F_7DC0_A352_41B3_9DB2BF1DD214",
 "data": {
  "label": "EXIT To 1st Floor Lobby"
 },
 "maps": [
  {
   "hfov": 49.07,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 98,
      "height": 16
     }
    ]
   },
   "pitch": -42.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Arrow 01 Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.85,
   "image": "this.AnimatedImageResource_1C782FCE_0904_BE0B_4161_309EA881CC64",
   "pitch": 2.07,
   "yaw": -4.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6D6DA080_7DC0_A3CE_41C6_60267BFCCF48",
 "maps": [
  {
   "hfov": 24.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 62.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 2048,
      "height": 818
     }
    ]
   },
   "pitch": -6.97,
   "yaw": 35.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6DB8B579_7DC0_AD3E_41D4_FF7079C5EFBA",
 "data": {
  "label": "Blood LAB"
 },
 "maps": [
  {
   "hfov": 62.34,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 40,
      "height": 16
     }
    ]
   },
   "pitch": -6.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 47.15,
   "image": "this.AnimatedImageResource_1C720FCB_0904_BE09_4185_421503EAF3ED",
   "pitch": -27.57,
   "yaw": -103.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6030BD3E_7DB1_9FB7_41DE_4E89364B17D7",
 "maps": [
  {
   "hfov": 47.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -27.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.8,
   "image": "this.AnimatedImageResource_1C793FCE_0904_BE0B_4163_CD492190082D",
   "pitch": -6.47,
   "yaw": -10.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_71671843_7E26_56F7_417C_A5D772124356",
 "maps": [
  {
   "hfov": 21.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -6.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.38,
   "image": "this.AnimatedImageResource_1C719FCB_0904_BE09_4196_046B64F37D89",
   "pitch": -39.3,
   "yaw": 58.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6B28F308_7D5E_EB5B_41BD_252F880FB4F3",
 "maps": [
  {
   "hfov": 30.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 58.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -39.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "data": {
  "label": "Arrow 06a Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.91,
   "image": "this.AnimatedImageResource_1C7BDFCE_0904_BE0B_4182_5146909B1E12",
   "pitch": -0.77,
   "yaw": 115.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6088ABCB_7E40_E553_418D_0740B4D0E472",
 "maps": [
  {
   "hfov": 29.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 115.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ]
   },
   "pitch": -0.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 33.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 1113,
      "height": 141
     }
    ]
   },
   "pitch": 5.2,
   "yaw": 120.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_60C21525_7E41_E2D6_41D8_67B547029A5B",
 "data": {
  "label": "Speech Therapy Room"
 },
 "maps": [
  {
   "hfov": 33.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 126,
      "height": 16
     }
    ]
   },
   "pitch": 5.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.63,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 385,
      "height": 528
     }
    ]
   },
   "pitch": -4.02,
   "yaw": 152.03
  }
 ],
 "id": "overlay_60BA9336_7E40_6535_41B6_B783AB590B89",
 "maps": [
  {
   "hfov": 11.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 152.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 21
     }
    ]
   },
   "pitch": -4.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 24.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 830,
      "height": 212
     }
    ]
   },
   "pitch": -11.62,
   "yaw": 161.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6161710B_7E40_E2D3_41C5_A4B30E803D6C",
 "data": {
  "label": "Exit"
 },
 "maps": [
  {
   "hfov": 24.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 161.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 62,
      "height": 16
     }
    ]
   },
   "pitch": -11.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "FIRST FLOOR",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.93,
   "image": "this.AnimatedImageResource_76181B53_6B23_0124_41CE_671C6A8AC6C0",
   "pitch": 50.06,
   "yaw": 76.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7AD154AE_6B21_077C_41DA_009DDB15F511",
 "maps": [
  {
   "hfov": 17.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 50.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 1086,
      "height": 217
     }
    ]
   },
   "pitch": 59.61,
   "yaw": 80.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7AA0A8AD_6B27_0F7D_41D1_63FDEEC46DF9",
 "data": {
  "label": "First Floor"
 },
 "maps": [
  {
   "hfov": 16.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 80,
      "height": 16
     }
    ]
   },
   "pitch": 59.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.63,
   "image": "this.AnimatedImageResource_76188B53_6B23_0124_41DA_7FC081A3CF27",
   "pitch": -18.83,
   "yaw": -100.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7AD8E5E5_6B27_00ED_41C8_970DAC3AD748",
 "maps": [
  {
   "hfov": 21.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -18.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Arrow 06a Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.62,
   "image": "this.AnimatedImageResource_7618CB53_6B23_0124_41BD_CB2686E5C3BA",
   "pitch": 0.68,
   "yaw": 11.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7AD69907_6B21_012D_41C8_3AAFDFF073FE",
 "maps": [
  {
   "hfov": 13.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ]
   },
   "pitch": 0.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.55,
   "image": "this.AnimatedImageResource_76195B53_6B23_0124_417A_BF2F87D17F23",
   "pitch": -9.25,
   "yaw": 29.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7928D96C_6B23_01E3_41AB_34EE959B3455",
 "maps": [
  {
   "hfov": 12.55,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -9.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 25.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_1_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 834,
      "height": 113
     }
    ]
   },
   "pitch": 1.06,
   "yaw": 38.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7E72F8E6_6B23_00EF_41AD_985DF6C285EA",
 "data": {
  "label": "Operation Theater"
 },
 "maps": [
  {
   "hfov": 25.04,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_1_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 118,
      "height": 16
     }
    ]
   },
   "pitch": 1.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.61,
   "image": "this.AnimatedImageResource_7619FB53_6B23_0124_41D5_AD5EC6853719",
   "pitch": -9.97,
   "yaw": 139.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7AE8ED71_6B21_01E5_41C8_15F5AEB91B97",
 "maps": [
  {
   "hfov": 25.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 139.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -9.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 466,
      "height": 585
     }
    ]
   },
   "pitch": -2.27,
   "yaw": -145.36
  }
 ],
 "id": "overlay_6AA978A2_7E5A_37B1_41CF_D8BDFB710A4A",
 "maps": [
  {
   "hfov": 14.09,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 20
     }
    ]
   },
   "pitch": -2.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 375,
      "height": 197
     }
    ]
   },
   "pitch": -10.06,
   "yaw": -144.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6B04A2F7_7E5B_FB9F_41D2_20800EEEC854",
 "data": {
  "label": "EXIT"
 },
 "maps": [
  {
   "hfov": 11.19,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FAF15_7D5E_BB74_41CA_08C3A33F15FB_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 15
     }
    ]
   },
   "pitch": -10.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 32.88,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 1092,
      "height": 1284
     }
    ]
   },
   "pitch": -5.65,
   "yaw": -17.38
  }
 ],
 "id": "overlay_6B65E93B_7D5E_67BD_41DE_DCC75501D053",
 "maps": [
  {
   "hfov": 32.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707DC967_7D5E_A7D5_41DC_3EA9E3204F87_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": -5.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.91,
   "image": "this.AnimatedImageResource_77953E56_6B2F_032F_41C1_3985A44C20E6",
   "pitch": -27.46,
   "yaw": -0.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7DFCD9A8_6B23_0163_41C0_5CE8BAB1A6E2",
 "maps": [
  {
   "hfov": 16.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -27.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 31.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 1138,
      "height": 227
     }
    ]
   },
   "pitch": -21.39,
   "yaw": 4.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7DEEE6BF_6B21_035D_41AF_C870D2121FB4",
 "data": {
  "label": "Main Enterance"
 },
 "maps": [
  {
   "hfov": 31.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 80,
      "height": 16
     }
    ]
   },
   "pitch": -21.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.78,
   "image": "this.AnimatedImageResource_7796BE56_6B2F_032F_41D5_1E6FDABB8D74",
   "pitch": -6.69,
   "yaw": 44.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7C2B8C29_6B21_0764_41D9_2CFD967B99B1",
 "maps": [
  {
   "hfov": 11.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -6.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 31.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 1065,
      "height": 222
     }
    ]
   },
   "pitch": -0.62,
   "yaw": 51.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_7119BA17_6B21_032C_41DA_2C8E4C7F199F",
 "data": {
  "label": "Emergency Ward"
 },
 "maps": [
  {
   "hfov": 31.97,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 51.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 76,
      "height": 16
     }
    ]
   },
   "pitch": -0.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Arrow 06a Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.52,
   "image": "this.AnimatedImageResource_1C4C5FCA_0904_BE0B_418F_B8C0EB3B028F",
   "pitch": -25.5,
   "yaw": -24.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_691DB5F8_7D52_AEBB_41D1_268A93FF1AC5",
 "maps": [
  {
   "hfov": 16.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ]
   },
   "pitch": -25.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.91,
   "image": "this.AnimatedImageResource_1C4F8FCA_0904_BE0B_41A0_AE9AF5741D9A",
   "pitch": -13.12,
   "yaw": -7.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_65A0187C_7D52_65BB_41D6_8E93CFCA67BE",
 "maps": [
  {
   "hfov": 12.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -13.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 07"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 55.61,
   "image": "this.AnimatedImageResource_1C4FFFCA_0904_BE0B_419D_F764E97F82F4",
   "pitch": 6.97,
   "yaw": 169.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6B2A779A_7D52_6B7F_41D7_766576D6C7C9",
 "maps": [
  {
   "hfov": 55.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.36,
   "image": "this.AnimatedImageResource_1C4F2FCB_0904_BE09_4195_8EF6FEB8CFCE",
   "pitch": -20.41,
   "yaw": 109.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_64469F86_7D53_9B57_41D1_A6173291657F",
 "maps": [
  {
   "hfov": 29.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -20.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 47.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_1_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 1627,
      "height": 381
     }
    ]
   },
   "pitch": -13.75,
   "yaw": 174.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_648BC1CE_7DC0_6552_41B3_3292F286C92A",
 "data": {
  "label": "Exit to Lobby"
 },
 "maps": [
  {
   "hfov": 47.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_1_HS_5_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 68,
      "height": 16
     }
    ]
   },
   "pitch": -13.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle Arrow 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.06,
   "image": "this.AnimatedImageResource_1C4EAFCB_0904_BE09_4199_960963CEE4A3",
   "pitch": -3.96,
   "yaw": -82.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_68B8733D_7DC7_A536_41D0_AD01C9C74572",
 "maps": [
  {
   "hfov": 24.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 57.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_1_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 1896,
      "height": 830
     }
    ]
   },
   "pitch": 2.06,
   "yaw": -73.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_685C1FA0_7DC0_BDCE_41CA_1FEA95FF4F41",
 "data": {
  "label": "Ultrasound Room"
 },
 "maps": [
  {
   "hfov": 57.33,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -73.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_1_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": 2.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 50.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 1658,
      "height": 205
     }
    ]
   },
   "pitch": 2.14,
   "yaw": 103.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_72F6A1D0_7DC0_E54E_41CD_9547FF6CFACC",
 "data": {
  "label": "Private Block Rooms"
 },
 "maps": [
  {
   "hfov": 50.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 103.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 129,
      "height": 16
     }
    ]
   },
   "pitch": 2.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 53.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 1760,
      "height": 225
     }
    ]
   },
   "pitch": -4.05,
   "yaw": -104.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_72895683_7DC0_AFD2_41D6_57E7B0EC8389",
 "data": {
  "label": "Towards Laboratories"
 },
 "maps": [
  {
   "hfov": 53.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 125,
      "height": 16
     }
    ]
   },
   "pitch": -4.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Arrow 06a Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.24,
   "image": "this.AnimatedImageResource_1C74FFCD_0904_BE09_4192_8099C0BF9A2F",
   "pitch": -6.26,
   "yaw": 167.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6BB19F2B_7DCF_9ED3_41DA_7E7AF6E84847",
 "maps": [
  {
   "hfov": 14.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ]
   },
   "pitch": -6.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 35.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 1177,
      "height": 146
     }
    ]
   },
   "pitch": -5.44,
   "yaw": 146.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6BDFF338_7DC0_653D_41C8_EB50DA387775",
 "data": {
  "label": "Towards ICU and NICU"
 },
 "maps": [
  {
   "hfov": 35.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_4_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 128,
      "height": 16
     }
    ]
   },
   "pitch": -5.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 01 Right"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.51,
   "image": "this.AnimatedImageResource_1C746FCD_0904_BE09_418F_9133D7321317",
   "pitch": 0.73,
   "yaw": -47.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_672EB391_7DC0_65CE_41DB_43C7354A7365",
 "maps": [
  {
   "hfov": 13.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 46.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 1569,
      "height": 307
     }
    ]
   },
   "pitch": -9.86,
   "yaw": -33.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6764E76C_7DC1_ED56_41D8_A802136E7210",
 "data": {
  "label": "Back Down"
 },
 "maps": [
  {
   "hfov": 46.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 81,
      "height": 16
     }
    ]
   },
   "pitch": -9.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.19,
   "image": "this.AnimatedImageResource_1C77EFCD_0904_BE09_419F_A73EE759717C",
   "pitch": -15.62,
   "yaw": -117.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_62C60345_7E40_E556_41D0_CD6B2A64008B",
 "maps": [
  {
   "hfov": 11.19,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -117.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -15.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.7,
   "image": "this.AnimatedImageResource_1C777FCD_0904_BE09_41A1_053D070B0212",
   "pitch": -7.69,
   "yaw": -171.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5FD7C453_7E43_E372_41AC_4476F5CC365E",
 "maps": [
  {
   "hfov": 12.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -7.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 39.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 1303,
      "height": 472
     }
    ]
   },
   "pitch": 2.32,
   "yaw": -157.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_63B9DFF3_7E43_BD32_41D5_D5F6533735C2",
 "data": {
  "label": "Physio and Speech\u000d Therapy\u000d Rooms"
 },
 "maps": [
  {
   "hfov": 39.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_9_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 44,
      "height": 16
     }
    ]
   },
   "pitch": 2.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.09,
   "image": "this.AnimatedImageResource_1C74FFCD_0904_BE09_4190_1361C62F1C3B",
   "pitch": -28.45,
   "yaw": 89.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_73DE91D4_7DC0_A576_41D4_569F9BE19AB0",
 "maps": [
  {
   "hfov": 29.09,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -28.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.27,
   "image": "this.AnimatedImageResource_1C745FCD_0904_BE09_4195_3ADB14386033",
   "pitch": -19.03,
   "yaw": 19.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6B9C536D_7DC0_A556_41CA_F2240982699E",
 "maps": [
  {
   "hfov": 23.27,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -19.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 34.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 1146,
      "height": 332
     }
    ]
   },
   "pitch": -10.74,
   "yaw": 30.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6A720133_7DC0_E532_41B5_95408E105A92",
 "data": {
  "label": "EXIT"
 },
 "maps": [
  {
   "hfov": 34.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_1_HS_2_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 55,
      "height": 16
     }
    ]
   },
   "pitch": -10.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Arrow 01 Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.93,
   "image": "this.AnimatedImageResource_1C76FFCD_0904_BE09_4197_03A448B82863",
   "pitch": 6.97,
   "yaw": -60.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6CE9A4D1_7DC0_634E_41C0_E244F1BE4B23",
 "maps": [
  {
   "hfov": 27.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 69.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 2048,
      "height": 331
     }
    ]
   },
   "pitch": -6.09,
   "yaw": -30.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6DF1412F_7DC0_62D2_41D1_42FC49B4E527",
 "data": {
  "label": "EXIT"
 },
 "maps": [
  {
   "hfov": 69.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 98,
      "height": 16
     }
    ]
   },
   "pitch": -6.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.45,
   "image": "this.AnimatedImageResource_1C766FCD_0904_BE09_4198_B428E0B72520",
   "pitch": -36.49,
   "yaw": -103.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6E40D8D5_7DC1_E377_41D6_96A12D36A7F9",
 "maps": [
  {
   "hfov": 31.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -36.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 35.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 1744,
      "height": 307
     }
    ]
   },
   "pitch": -47.54,
   "yaw": -115.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_6C8CCA2D_7DC0_A6D6_41B9_E0D01E4B15CE",
 "data": {
  "label": "Blood Donation Room"
 },
 "maps": [
  {
   "hfov": 35.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_1_HS_3_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 90,
      "height": 16
     }
    ]
   },
   "pitch": -47.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 34.32,
   "image": "this.AnimatedImageResource_1C709FCB_0904_BE09_4195_0B76002B203E",
   "pitch": -46.29,
   "yaw": -107.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_64BFCB62_7D56_9BCF_41B3_5B37CDC6AB7D",
 "maps": [
  {
   "hfov": 34.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -46.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 86.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 2048,
      "height": 223
     }
    ]
   },
   "pitch": -7.86,
   "yaw": -113.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_67ABDAA2_7DC1_A7D2_41D0_130C857851E7",
 "data": {
  "label": "Towards Deptartment of Medicine"
 },
 "maps": [
  {
   "hfov": 86.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -113.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_1_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 146,
      "height": 16
     }
    ]
   },
   "pitch": -7.86
  }
 ]
},
{
 "data": {
  "name": "- COLLAPSE"
 },
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "scrollBarVisible": "rollOver",
 "width": 66,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "100%",
 "layout": "absolute",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "- EXPANDED"
 },
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "scrollBarVisible": "rollOver",
 "right": 0,
 "width": 330,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "height": "100%",
 "layout": "absolute",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "layout": "vertical",
 "minHeight": 1,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "layout": "vertical",
 "minHeight": 1,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "layout": "vertical",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Global"
 },
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "bottom": "10%",
 "contentOpaque": false,
 "top": "10%",
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "shadowBlurRadius": 25,
 "layout": "horizontal",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "paddingTop": 0,
 "shadowOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "left": "15%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minWidth": 1,
 "top": "10%",
 "bottom": "80%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "verticalAlign": "top",
 "layout": "vertical",
 "minHeight": 1,
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C730FCB_0904_BE09_4180_AC2CF04D80AF",
 "levels": [
  {
   "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C737FCB_0904_BE09_4198_C8DCA20C4701",
 "levels": [
  {
   "url": "media/panorama_70742CE6_7D5E_9ED7_41DD_6DC14ADDB9F9_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C710FCB_0904_BE09_4190_A0C849F67820",
 "levels": [
  {
   "url": "media/panorama_7070D1EF_7D5E_E6D5_41B9_6956F7B3F24B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C75AFCB_0904_BE09_4198_80978A5753CD",
 "levels": [
  {
   "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C756FCB_0904_BE09_4197_B795C8317F6F",
 "levels": [
  {
   "url": "media/panorama_707D97FF_7D5E_AAB5_41B3_63380F9B60CA_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C702FCB_0904_BE09_418B_EF6C86FEE46A",
 "levels": [
  {
   "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C739FCB_0904_BE09_4195_6F14B5A137B5",
 "levels": [
  {
   "url": "media/panorama_7076E40E_7D5E_ED57_41DD_0E93763D1DEC_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C750FCD_0904_BE09_4197_C24770115794",
 "levels": [
  {
   "url": "media/panorama_70775A34_7D5E_654B_41DE_15F01A4CC530_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C4E3FCB_0904_BE09_41A1_C17645B439CD",
 "levels": [
  {
   "url": "media/panorama_7074185A_7D5E_A5FF_4145_89357997DAD0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C788FCE_0904_BE0B_4178_0C61D00E646A",
 "levels": [
  {
   "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 76,
 "colCount": 3,
 "id": "AnimatedImageResource_1C782FCE_0904_BE0B_4161_309EA881CC64",
 "levels": [
  {
   "url": "media/panorama_7070AFB7_7D5F_BAB5_41BA_676F2FCED7C3_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C720FCB_0904_BE09_4185_421503EAF3ED",
 "levels": [
  {
   "url": "media/panorama_707F55B6_7D5E_AEB7_41B6_31CE30EFFE50_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 76,
 "colCount": 3,
 "id": "AnimatedImageResource_1C793FCE_0904_BE0B_4163_CD492190082D",
 "levels": [
  {
   "url": "media/panorama_70730647_7D5F_ADD5_41D4_5EED77CB4D61_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C719FCB_0904_BE09_4196_046B64F37D89",
 "levels": [
  {
   "url": "media/panorama_7070F0F8_7D5E_A6BB_417B_5728E6128AF0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C7BDFCE_0904_BE0B_4182_5146909B1E12",
 "levels": [
  {
   "url": "media/panorama_7071793D_7D5F_A7B5_41C4_D71235598ADD_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_76181B53_6B23_0124_41CE_671C6A8AC6C0",
 "levels": [
  {
   "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_76188B53_6B23_0124_41DA_7FC081A3CF27",
 "levels": [
  {
   "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_7618CB53_6B23_0124_41BD_CB2686E5C3BA",
 "levels": [
  {
   "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_76195B53_6B23_0124_417A_BF2F87D17F23",
 "levels": [
  {
   "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_7619FB53_6B23_0124_41D5_AD5EC6853719",
 "levels": [
  {
   "url": "media/panorama_7919C981_6B23_0124_41D0_6B33266EE144_1_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_77953E56_6B2F_032F_41C1_3985A44C20E6",
 "levels": [
  {
   "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_7796BE56_6B2F_032F_41D5_1E6FDABB8D74",
 "levels": [
  {
   "url": "media/panorama_73F2D2E0_6B23_00E4_41C6_A4579CCB7AA6_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C4C5FCA_0904_BE0B_418F_B8C0EB3B028F",
 "levels": [
  {
   "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C4F8FCA_0904_BE0B_41A0_AE9AF5741D9A",
 "levels": [
  {
   "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C4FFFCA_0904_BE0B_419D_F764E97F82F4",
 "levels": [
  {
   "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 680,
   "height": 1020
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C4F2FCB_0904_BE09_4195_8EF6FEB8CFCE",
 "levels": [
  {
   "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C4EAFCB_0904_BE09_4199_960963CEE4A3",
 "levels": [
  {
   "url": "media/panorama_706BEFB0_7D5E_9B4B_41CD_A89013E41EF2_1_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C74FFCD_0904_BE09_4192_8099C0BF9A2F",
 "levels": [
  {
   "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 83,
 "colCount": 3,
 "id": "AnimatedImageResource_1C746FCD_0904_BE09_418F_9133D7321317",
 "levels": [
  {
   "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C77EFCD_0904_BE09_419F_A73EE759717C",
 "levels": [
  {
   "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C777FCD_0904_BE09_41A1_053D070B0212",
 "levels": [
  {
   "url": "media/panorama_70700377_7D5E_6BB5_41C9_E66B0FE53B8E_1_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C74FFCD_0904_BE09_4190_1361C62F1C3B",
 "levels": [
  {
   "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C745FCD_0904_BE09_4195_3ADB14386033",
 "levels": [
  {
   "url": "media/panorama_7076B0DF_7D5E_66F5_41B7_F35248F9C9C8_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 360
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 100,
 "colCount": 3,
 "id": "AnimatedImageResource_1C76FFCD_0904_BE09_4197_03A448B82863",
 "levels": [
  {
   "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C766FCD_0904_BE09_4198_B428E0B72520",
 "levels": [
  {
   "url": "media/panorama_707FFC5A_7D5F_9DFF_41CD_BAC0A50CAE32_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_1C709FCB_0904_BE09_4195_0B76002B203E",
 "levels": [
  {
   "url": "media/panorama_7075FB02_7D5E_FB4F_41DB_700BA3103430_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ]
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Container black"
 },
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 36,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "minHeight": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.4,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "cursor": "hand",
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": true,
 "width": 50,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "bottom": "40%",
 "verticalAlign": "middle",
 "top": "40%",
 "mode": "push",
 "maxWidth": 80,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton arrow"
 },
 "maxHeight": 80
},
{
 "data": {
  "name": "Container"
 },
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "90%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "height": "100%",
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "cursor": "hand",
 "paddingLeft": 0,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "transparencyActive": true,
 "right": 9,
 "width": 50,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "top": "40%",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "bottom": "40%",
 "verticalAlign": "middle",
 "mode": "push",
 "maxWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "shadow": false,
 "propagateClick": true,
 "data": {
  "name": "IconButton collapse"
 },
 "maxHeight": 50
},
{
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "width": "85%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "layout": "absolute",
 "minHeight": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "scrollBarColor": "#0069A3",
 "paddingRight": 50,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 460,
 "horizontalAlign": "left",
 "width": "50%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "layout": "vertical",
 "minHeight": 1,
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "shadow": false,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "width": "25%",
 "verticalAlign": "middle",
 "height": "75%",
 "mode": "push",
 "maxWidth": 60,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "minHeight": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 140,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "left": 0,
 "paddingLeft": 70,
 "scrollBarColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontStyle": "italic",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "horizontalAlign": "center",
 "itemThumbnailOpacity": 1,
 "itemLabelFontFamily": "Oswald",
 "itemMode": "normal",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "width": "100%",
 "itemPaddingRight": 3,
 "itemMaxHeight": 1000,
 "itemMaxWidth": 1000,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "height": "92%",
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "itemHorizontalAlign": "center",
 "minHeight": 1,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "backgroundOpacity": 0,
 "itemOpacity": 1,
 "itemLabelPosition": "bottom",
 "class": "ThumbnailGrid",
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "shadow": false,
 "itemBackgroundColor": [],
 "propagateClick": true,
 "itemBackgroundColorRatios": [],
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "paddingRight": 70,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "minWidth": 1,
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemVerticalAlign": "top",
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "itemThumbnailHeight": 125,
 "paddingTop": 10,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "gap": 26,
 "paddingBottom": 70,
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "itemThumbnailWidth": 220,
 "itemPaddingBottom": 3,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10
},
{
 "data": {
  "name": "WebFrame"
 },
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "borderSize": 0,
 "scrollEnabled": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "height": "100%",
 "insetBorder": false,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "show": "this.openLink('https://www.google.com/maps?ll=31.32483,74.413928&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=12116451256336649237', '_self')",
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingLeft": 0,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "width": "25%",
 "verticalAlign": "middle",
 "height": "75%",
 "mode": "push",
 "maxWidth": 60,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "minHeight": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "X"
 }
},
{
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "width": "55%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "layout": "absolute",
 "minHeight": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "paddingLeft": 60,
 "scrollBarColor": "#0069A3",
 "paddingRight": 60,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "overflow": "visible",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 460,
 "horizontalAlign": "left",
 "width": "45%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "layout": "vertical",
 "minHeight": 1,
 "height": "100%",
 "paddingTop": 20,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 20,
 "shadow": false,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingLeft": 0,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 50,
 "width": "25%",
 "verticalAlign": "middle",
 "height": "75%",
 "mode": "push",
 "maxWidth": 60,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "minHeight": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "X"
 }
},
{
 "data": {
  "name": "- Buttons set"
 },
 "children": [
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Image_C531E783_E036_B906_41C2_473921148D5F",
  "this.Label_F161453A_E36F_9258_41DF_40E767C712A9",
  "this.Image_F433C07E_E365_92D8_41B9_D8B516248CE0"
 ],
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "paddingLeft": 40,
 "scrollBarColor": "#000000",
 "paddingRight": 40,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "top": "0%",
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 40,
 "backgroundOpacity": 0.7,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 40,
 "shadow": false,
 "height": "100%",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ]
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minWidth": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "top": "0%",
 "maxWidth": 2000,
 "minHeight": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image"
 },
 "maxHeight": 1000
},
{
 "data": {
  "name": "Container space"
 },
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "right",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 60,
 "verticalAlign": "top",
 "layout": "horizontal",
 "minHeight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 100,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "layout": "vertical",
 "minHeight": 520,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "shadow": false,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "borderSize": 0,
 "minWidth": 50,
 "horizontalAlign": "right",
 "width": "100%",
 "verticalAlign": "top",
 "top": 20,
 "mode": "push",
 "maxWidth": 60,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "minHeight": 50,
 "height": "36.14%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 },
 "maxHeight": 60
},
{
 "playbackBarHeadOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "minHeight": 1,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 1,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": "0%",
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "cursor": "hand",
 "left": 10,
 "paddingLeft": 0,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 50,
 "horizontalAlign": "center",
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "mode": "push",
 "maxWidth": 60,
 "minHeight": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton <"
 },
 "maxHeight": 60
},
{
 "cursor": "hand",
 "paddingLeft": 0,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "transparencyActive": false,
 "right": 10,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 50,
 "horizontalAlign": "center",
 "top": "20%",
 "width": "14.22%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "mode": "push",
 "maxWidth": 60,
 "minHeight": 50,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton >"
 },
 "maxHeight": 60
},
{
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "paddingRight": 0,
 "transparencyActive": false,
 "right": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "borderSize": 0,
 "minWidth": 50,
 "horizontalAlign": "right",
 "width": "10%",
 "verticalAlign": "top",
 "top": 20,
 "mode": "push",
 "maxWidth": 60,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "minHeight": 50,
 "height": "10%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton X"
 },
 "maxHeight": 60
},
{
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "minWidth": 1,
 "horizontalAlign": "center",
 "verticalAlign": "bottom",
 "top": "0%",
 "maxWidth": 2000,
 "minHeight": 1,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image40635"
 },
 "maxHeight": 1000
},
{
 "data": {
  "name": "Container space"
 },
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "right",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "layout": "horizontal",
 "minHeight": 0,
 "height": "5%",
 "paddingTop": 20,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "paddingLeft": 0,
 "scrollBarColor": "#E73B2C",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 100,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "layout": "vertical",
 "minHeight": 520,
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 30,
 "shadow": false,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Container space"
 },
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 370,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 40,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 1"
 },
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "top": "26%",
 "width": "100%",
 "bottom": "26%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "layout": "vertical",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Container footer"
 },
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "bottom": "0%",
 "contentOpaque": false,
 "height": 130,
 "scrollBarMargin": 2,
 "verticalAlign": "bottom",
 "layout": "vertical",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-1"
 },
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_C7F917C4_E04F_9902_41E1_65134BB31E3C"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "layout": "vertical",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-2"
 },
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "layout": "vertical",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-3"
 },
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "layout": "vertical",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-4"
 },
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "layout": "vertical",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-5"
 },
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "layout": "vertical",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "data": {
  "name": "-Level 2-6"
 },
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547"
 ],
 "left": "0%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "top": "25%",
 "width": "100%",
 "bottom": "25%",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "verticalAlign": "middle",
 "layout": "vertical",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "left": "0%",
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "fontSize": 18,
 "width": "73.064%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "top": "-19.32%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 36,
 "mode": "push",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "cursor": "hand",
 "data": {
  "name": "Image41967"
 },
 "id": "Image_C531E783_E036_B906_41C2_473921148D5F",
 "left": "4.77%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "74.194%",
 "borderSize": 0,
 "url": "skin/Image_C531E783_E036_B906_41C2_473921148D5F.png",
 "minWidth": 1,
 "horizontalAlign": "center",
 "bottom": "15.17%",
 "verticalAlign": "middle",
 "height": "9.069%",
 "maxWidth": 1472,
 "click": "this.openLink('http://www.panoraproperties.com', '_blank')",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "maxHeight": 608,
 "propagateClick": false
},
{
 "fontFamily": "Segoe Script",
 "data": {
  "name": "Label4563"
 },
 "left": "0%",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "id": "Label_F161453A_E36F_9258_41DF_40E767C712A9",
 "width": "78.341%",
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "text": "Developed By:",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "bottom": "23.44%",
 "verticalAlign": "middle",
 "height": "3.994%",
 "fontSize": "2.1vmin",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "propagateClick": false,
 "fontWeight": "normal"
},
{
 "id": "Image_F433C07E_E365_92D8_41B9_D8B516248CE0",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_F433C07E_E365_92D8_41B9_D8B516248CE0.png",
 "minWidth": 1,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "top": "0%",
 "maxWidth": 979,
 "minHeight": 1,
 "height": "31.076%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image13536"
 },
 "maxHeight": 1224
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "height": "100%",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.16vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.41vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.41vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.43vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.43vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.43vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.43vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.32vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.43vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.43vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.65vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button"
 },
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontStyle": "italic",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontSize": "2.39vh",
 "width": 180,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#04A3E1"
 ],
 "label": "LOREM IPSUM",
 "minHeight": 1,
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0.7,
 "class": "Button",
 "borderRadius": 50,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 1,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontWeight": "bold",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "paddingLeft": 0,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0,
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "height": "46%",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.16vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.41vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.41vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "layout": "horizontal",
 "minHeight": 1,
 "height": "75%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Tour Info"
 },
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "label": "Main Building >",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Location"
 },
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "pressedLabel": "Inserdt Text",
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "label": "Sports Areas >",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Floorplan"
 },
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "label": "Hostels >",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Photoalbum"
 },
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "label": "Educational Avenues >",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button Contact"
 },
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "label": "Aerial Views >",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "blue line"
 },
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "width": 40,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 2,
 "verticalAlign": "top",
 "backgroundColor": [
  "#5CA1DE"
 ],
 "layout": "horizontal",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "visible"
},
{
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "height": 78,
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "data": {
  "name": "-Container Icons 1"
 },
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 56,
 "verticalAlign": "bottom",
 "layout": "horizontal",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 7,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "data": {
  "name": "-Container Icons 2"
 },
 "children": [
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 44,
 "verticalAlign": "top",
 "layout": "horizontal",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 7,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "fontSize": 18,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "rollOverFontSize": 18,
 "label": "BACK",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 36,
 "width": "100%",
 "mode": "push",
 "label": "Main Lobby",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 36,
 "mode": "push",
 "label": "Operation Theatre",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "pressedLabel": "Reception",
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 36,
 "mode": "push",
 "label": "Peads Ward",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 7)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 36,
 "mode": "push",
 "label": "Emergency Ward",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 6)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 5"
 },
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 36,
 "mode": "push",
 "label": "Radiology Dept.",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 2)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 36,
 "mode": "push",
 "label": "ICU",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 13)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 6"
 },
 "id": "Button_C7F917C4_E04F_9902_41E1_65134BB31E3C",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 36,
 "mode": "push",
 "label": "Labour Rooms",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "fontSize": 18,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "rollOverFontSize": 18,
 "label": "BACK",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "fontSize": 18,
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "height": 36,
 "mode": "push",
 "label": "Main Aerial View",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "fontSize": 18,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "rollOverFontSize": 18,
 "label": "BACK",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "fontSize": 18,
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "height": 36,
 "mode": "push",
 "label": "Cricket Ground",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "fontSize": 18,
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "height": 36,
 "mode": "push",
 "label": "Basketball Court",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "fontSize": 18,
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "height": 36,
 "mode": "push",
 "label": "Gym",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "fontSize": 18,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "rollOverFontSize": 18,
 "label": "BACK",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "fontSize": 18,
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "height": 36,
 "mode": "push",
 "label": "Ground",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "fontSize": 18,
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "height": 36,
 "mode": "push",
 "label": "Mess Area",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "fontSize": 18,
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "height": 36,
 "mode": "push",
 "label": "Bedroom",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "fontSize": 18,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "rollOverFontSize": 18,
 "label": "BACK",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "fontSize": 18,
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "height": 36,
 "mode": "push",
 "label": "Library",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 2"
 },
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "fontSize": 18,
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "height": 36,
 "mode": "push",
 "label": "Lecture Hall",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 23,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 3"
 },
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "fontSize": 18,
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "height": 36,
 "mode": "push",
 "label": "Court Room",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 4"
 },
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "fontSize": 18,
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "height": 36,
 "mode": "push",
 "label": "Computer Lab",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "textDecoration": "none",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "iconBeforeLabel": true
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "rollOverFontFamily": "Oswald",
 "iconBeforeLabel": true,
 "paddingLeft": 5,
 "data": {
  "name": "Button <BACK"
 },
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "fontSize": 18,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "rollOverFontSize": 18,
 "label": "BACK",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 0.8
},
{
 "data": {
  "name": "line"
 },
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "scroll",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 1,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "data": {
  "name": "line separator"
 },
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "left",
 "minWidth": 1,
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 8,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "overflow": "scroll"
},
{
 "fontFamily": "Oswald",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingLeft": 10,
 "data": {
  "name": "Button text 1"
 },
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "fontSize": 18,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "height": 36,
 "width": "100%",
 "mode": "push",
 "label": "Main Aerial View",
 "minHeight": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "paddingTop": 0,
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "backgroundOpacity": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "rollOverShadow": false,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "rollOverShadowBlurRadius": 18,
 "shadowSpread": 1,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontWeight": "normal",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8
},
{
 "paddingLeft": 0,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "width": "25%",
 "paddingRight": 0,
 "borderSize": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "horizontalAlign": "left",
 "minWidth": 1,
 "verticalAlign": "top",
 "height": "100%",
 "maxWidth": 200,
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "maxHeight": 200,
 "propagateClick": false,
 "data": {
  "name": "agent photo"
 }
},
{
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "paddingLeft": 10,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 10,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 1,
 "width": "75%",
 "scrollBarMargin": 2,
 "height": "100%",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.43vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.32vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.32vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.32vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.32vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.77vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "transparencyActive": true,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "verticalAlign": "middle",
 "height": 44,
 "mode": "push",
 "maxWidth": 101,
 "click": "this.openLink('https://arifmemorialhospital.com.pk/', '_blank')",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "maxHeight": 101,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Info"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "verticalAlign": "middle",
 "height": 44,
 "mode": "push",
 "maxWidth": 101,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "maxHeight": 101,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Thumblist"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "transparencyActive": false,
 "width": 44,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "verticalAlign": "middle",
 "height": 44,
 "mode": "push",
 "maxWidth": 101,
 "click": "this.openLink('https://www.google.com/maps/place/Arif+Memorial+Hospital/@31.2740009,74.4014372,973m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3919af62740d98c5:0x134a736b2dbc895a!8m2!3d31.2740009!4d74.4040121!16s%2Fg%2F12mkzjtfr?entry=ttu&g_ep=EgoyMDI1MTEzMC4wIKXMDSoASAFQAw%3D%3D', '_blank')",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "maxHeight": 101,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton Location"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "transparencyActive": true,
 "width": 51.6,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "verticalAlign": "middle",
 "height": 45.6,
 "mode": "push",
 "maxWidth": 58,
 "click": "this.openLink('https://www.facebook.com/rlmc.edu.pk/', '_blank')",
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "maxHeight": 58,
 "cursor": "hand",
 "propagateClick": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "paddingLeft": 0,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "transparencyActive": false,
 "width": 50,
 "paddingRight": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minWidth": 1,
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "verticalAlign": "middle",
 "height": 50,
 "mode": "push",
 "maxWidth": 101,
 "minHeight": 1,
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "maxHeight": 101,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "visible": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton --"
 }
}],
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.Label_C559C0ED_E037_F703_41C7_659205F9FE23"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "minHeight": 20,
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
