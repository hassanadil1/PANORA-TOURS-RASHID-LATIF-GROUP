(function(){
    var script = {
 "vrPolyfillScale": 0.5,
 "definitions": [{
 "initialPosition": {
  "yaw": -51.65,
  "class": "PanoramaCameraPosition",
  "pitch": -2.13
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_camera",
 "automaticZoomSpeed": 10
},
{
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer"
},
{
 "initialPosition": {
  "yaw": 5.2,
  "class": "PanoramaCameraPosition",
  "pitch": -4.45
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Second Floor",
 "id": "panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_DEB41928_FB69_85F6_41EB_ABBEEAEAE809",
  "this.overlay_DCF5986D_FB6B_844E_4187_44E678CC066B",
  "this.overlay_DDD468E9_FB68_8476_41EC_5D5AD5D1B7A2",
  "this.overlay_DD7A3A39_FB68_87D6_41EE_DD1AC7283EDE",
  "this.overlay_DCC9EFC4_FB69_7CBE_41C2_A75AE1BD0CEE",
  "this.overlay_D38B9BF4_FB68_845E_41EB_64FBC0306213",
  "this.overlay_DD8A634C_FB78_844E_41D4_5160ADDF58B6",
  "this.overlay_DDC7557F_FB78_8C4A_41E4_07E470D479A2"
 ],
 "thumbnailUrl": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 30.48,
  "class": "PanoramaCameraPosition",
  "pitch": 1.29
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Paeds ICU",
 "id": "panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_D9C909DD_FA9F_844E_41E8_AA8A674E1757"
 ],
 "thumbnailUrl": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 48,
  "class": "PanoramaCameraPosition",
  "pitch": 1.28
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "First Floor Cont.",
 "id": "panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_DBCAC624_FAA8_8FFE_41D9_4F16C008EC28",
  "this.overlay_DB2E0B79_FAA8_8456_41BD_8C7D9B2DFC99",
  "this.overlay_D8C8D39A_FA99_84CA_41E5_B0A42D137059",
  "this.overlay_D81E68D4_FA98_845E_4194_73AA5AE1DC54",
  "this.overlay_D84FC2DF_FA98_844A_41C9_73BCB6444CD4",
  "this.overlay_D99D2CFA_FA99_9C4A_41D0_35777E1EF8C0",
  "this.overlay_DE72B814_FA99_83DE_41E5_E6B55E600511",
  "this.overlay_DEF003FF_FB68_844A_41A3_936602D21665",
  "this.overlay_DCF5CE8B_FB68_BCCA_41DE_0AF7B3A67778"
 ],
 "thumbnailUrl": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Medical Ward",
 "id": "panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0DAA975_FA98_845E_41E7_D31893FD2562",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_E7306495_FAB8_8CDE_41D4_00FA00DB7844"
 ],
 "thumbnailUrl": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Lab",
 "id": "panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_EC443D1D_FAE8_BDCE_41E5_45DD8F88B784"
 ],
 "thumbnailUrl": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Emergency Ward Cont",
 "id": "panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_E965850A_FAE8_8DCA_41E4_14EF527C5EEC"
 ],
 "thumbnailUrl": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Emergency Ward",
 "id": "panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_E9E95381_FAEF_84B6_41D5_10928CA21097",
  "this.overlay_E9ECB364_FAE8_847E_41C3_B6AB7A12D542"
 ],
 "thumbnailUrl": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Main Reception",
 "id": "panorama_F0DAA975_FA98_845E_41E7_D31893FD2562",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_F559F424_FA97_83FE_41CE_18721B524913",
  "this.overlay_EAC4F2D9_FA97_8449_41D1_E25B4C067169",
  "this.overlay_EBB32F80_FA99_7CB6_41D9_B118548DE081",
  "this.overlay_EBA1AA85_FA98_84BE_41E7_477F5466F1E1",
  "this.overlay_EB18C4B7_FA98_8CDA_41EB_83523748A2CA",
  "this.overlay_E83B9E52_FA98_9C5A_41ED_975EC8E239E5",
  "this.overlay_E888F65F_FA99_8C49_41D4_8291D787E2CD",
  "this.overlay_E8DA96AC_FA98_8CCE_41E3_93BBA742F2A1"
 ],
 "thumbnailUrl": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Minor Operation Theatre",
 "id": "panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_D97CA19D_FA99_84CE_41EE_1DD6EC60A1C0"
 ],
 "thumbnailUrl": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "class": "Panorama",
 "label": "First Floor",
 "id": "panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0DB8766_FA98_8C7A_41E2_456148389C89",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0DB8766_FA98_8C7A_41E2_456148389C89",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0DAA975_FA98_845E_41E7_D31893FD2562",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_E4897EBD_FAB8_9CCE_41ED_E40A04B1599C",
  "this.overlay_E5FFD59E_FAB7_8CCA_41DB_2936184F3986",
  "this.overlay_DAD1C6CC_FAA8_8C4E_41DE_5D6D3FC2FD5C",
  "this.overlay_E5A6DE76_FAAB_BC5A_41DC_BE6C520FC59C",
  "this.overlay_E590AD07_FAAB_BDBA_41E1_F3E139149E64",
  "this.overlay_DA5B6740_FAA8_8DB6_41BB_0AC1A2B08992",
  "this.overlay_E5CE6E0F_FAA9_9FCA_41D6_2E1144F792AD",
  "this.overlay_DA03433B_FAA8_85CA_41E5_23979ECBC673",
  "this.overlay_DCF667B7_FA97_8CD8_41EB_15D3F5397E34"
 ],
 "thumbnailUrl": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 113.29,
  "class": "PanoramaCameraPosition",
  "pitch": -3.56
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 94.53,
  "class": "PanoramaCameraPosition",
  "pitch": -3.99
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Ground Floor Right cont.",
 "id": "panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_ED9BC4FE_FAE9_8C4A_41E8_81B3B7951EB2",
  "this.overlay_EC098EAD_FAE9_BCCE_41D6_4A0722DE381B",
  "this.overlay_EC545D65_FA98_BC7E_41C1_BFFE90B0AD5F",
  "this.overlay_EDC340CA_FA98_844A_41DA_5DB50115E70D",
  "this.overlay_EDA13999_FA98_84C9_41DC_4D11E045E8A7",
  "this.overlay_EDC718B8_FA98_84D6_41EE_5CD3FBED69C4",
  "this.overlay_E2AB753D_FA9F_8DCE_41E5_86203A657095",
  "this.overlay_E73DAF9A_FABB_FCCA_41D6_DB139CD02039",
  "this.overlay_E7D0BCA5_FABB_7CFE_41E9_AE0F770AEDA8"
 ],
 "thumbnailUrl": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Lab Cont.",
 "id": "panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_EFA080E9_FAE8_8476_41BF_438219B77A37",
  "this.overlay_EC8E0F13_FAEB_BDDA_41EA_1AACA4E8213B"
 ],
 "thumbnailUrl": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 10.36,
  "class": "PanoramaCameraPosition",
  "pitch": -1.18
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -176.87,
  "class": "PanoramaCameraPosition",
  "pitch": -3.38
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Dental Clinic",
 "id": "panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_E6746090_FAA8_84D6_41C1_759EFD8CF9FC"
 ],
 "thumbnailUrl": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 21.99,
  "class": "PanoramaCameraPosition",
  "pitch": 2.03
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 104.38,
  "class": "PanoramaCameraPosition",
  "pitch": 1.44
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 130.63,
  "class": "PanoramaCameraPosition",
  "pitch": 5.75
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -9.66,
  "class": "PanoramaCameraPosition",
  "pitch": 3.54
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -126.79,
  "class": "PanoramaCameraPosition",
  "pitch": -3.85
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -82.48,
  "class": "PanoramaCameraPosition",
  "pitch": -1.56
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Labour Room",
 "id": "panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_DD0843EF_FB77_844A_41E9_B0CE01220C25"
 ],
 "thumbnailUrl": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 5.65,
  "class": "PanoramaCameraPosition",
  "pitch": -1.6
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Opthamology Department Cont.",
 "id": "panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_E01DCC51_FAA8_FC56_41D6_BDB4BFD3154D"
 ],
 "thumbnailUrl": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 0.2,
  "class": "PanoramaCameraPosition",
  "pitch": -10.28
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Areial View",
 "id": "panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0DAA975_FA98_845E_41E7_D31893FD2562",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_F7C2D2BE_FAA8_84CA_41B2_4DE3ADF65B7B"
 ],
 "thumbnailUrl": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 126.93,
  "class": "PanoramaCameraPosition",
  "pitch": -6.93
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Aesthetics Clinics",
 "id": "panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_E7F9BC07_FAB8_83BA_41E7_EAC81853FA87"
 ],
 "thumbnailUrl": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_t.jpg",
 "hfov": 360
},
{
 "items": [
  {
   "media": "this.panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DAA975_FA98_845E_41E7_D31893FD2562",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DB8766_FA98_8C7A_41E2_456148389C89",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 58.35,
  "class": "PanoramaCameraPosition",
  "pitch": 7.84
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Peads Ward",
 "id": "panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_DBB9888B_FAA9_84CA_41EB_67126F5D9431"
 ],
 "thumbnailUrl": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 8.41,
  "class": "PanoramaCameraPosition",
  "pitch": -2.04
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 32.12,
  "class": "PanoramaCameraPosition",
  "pitch": -3.74
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Ground Floor Waiting Area",
 "id": "panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_E352255F_FA9B_8C4A_41E2_A42D76A82F26",
  "this.overlay_E2ADD7B3_FA99_8CDA_41E5_93217A2C0F2F",
  "this.overlay_E25729D9_FA99_8456_41D4_5C69CF4EF48B",
  "this.overlay_ED37018B_FA98_84CA_41C1_E18AB59C1E4C",
  "this.overlay_E27A2D98_FAA8_BCD6_41EA_CBD1DD86C155",
  "this.overlay_E3F016F2_FAA8_8C5A_41C6_A8720AED4DD5",
  "this.overlay_E22E6EA5_FAAB_9CFE_41E5_EEBB10650654",
  "this.overlay_E213E129_FAA8_85C9_41EA_BACBEB11D80C",
  "this.overlay_E23BE3BF_FAA8_84CA_41CD_116CE56E8C60",
  "this.overlay_E0DE5226_FAA8_87FB_41DD_F86C497715AB"
 ],
 "thumbnailUrl": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Main Enterance",
 "id": "panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5",
 "pitch": 0,
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0DAA975_FA98_845E_41E7_D31893FD2562",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A",
   "class": "AdjacentPanorama"
  }
 ],
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_EB2BE25B_FAE8_844A_41E3_B40E28A90CE4",
  "this.overlay_E99DB495_FAE8_8CDE_41DB_E5D42ADA6EC8",
  "this.overlay_E9A7CDAA_FAE9_BCCA_41D0_D0FE90570576",
  "this.overlay_EE3F0A86_FAF8_84BA_41D8_A833322C15B6"
 ],
 "thumbnailUrl": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_t.jpg",
 "hfov": 360,
 "hfovMin": "150%"
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Dermatology Department",
 "id": "panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_E67B722A_FAB7_87CA_41E2_6335A017DCF7"
 ],
 "thumbnailUrl": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "class": "Panorama",
 "label": "PhysicTherapy Clinic",
 "id": "panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_E100A833_FAA8_83DA_41C8_D6B4F9336E35"
 ],
 "thumbnailUrl": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": -51.4,
  "class": "PanoramaCameraPosition",
  "pitch": -3.63
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -48.79,
  "class": "PanoramaCameraPosition",
  "pitch": 1.36
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -85.93,
  "class": "PanoramaCameraPosition",
  "pitch": -12.09
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Opthamology Department",
 "id": "panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_E16F909B_FAAB_84CA_41EB_C03DA241F7D5"
 ],
 "thumbnailUrl": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_t.jpg",
 "hfov": 360
},
{
 "items": [
  {
   "media": "this.panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DAA975_FA98_845E_41E7_D31893FD2562",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DB8766_FA98_8C7A_41E2_456148389C89",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Surgical Ward",
 "id": "panorama_F0DB8766_FA98_8C7A_41E2_456148389C89",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_DAA836FB_FAA8_8C4A_41A8_51187A24A0CB"
 ],
 "thumbnailUrl": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_t.jpg",
 "hfov": 360
},
{
 "initialPosition": {
  "yaw": 4.81,
  "class": "PanoramaCameraPosition",
  "pitch": -1.13
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 26.91,
  "class": "PanoramaCameraPosition",
  "pitch": -0.46
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ]
 },
 "id": "panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_camera",
 "automaticZoomSpeed": 10
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Ground Floor Corridor Right",
 "id": "panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0DAA975_FA98_845E_41E7_D31893FD2562",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_EC8D11CF_FAEB_844A_41E8_146CE88FFE35",
  "this.overlay_EC2FD7FD_FAEB_8C4E_41E1_F86317ACED16"
 ],
 "thumbnailUrl": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "class": "Panorama",
 "label": "NICU",
 "id": "panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_DD5ED7D7_FB78_8C5A_41AC_E664C9B52E30"
 ],
 "thumbnailUrl": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Operation Theatre",
 "id": "panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_DD556506_FB78_8DBA_41EE_1CF8DCAB1E9A"
 ],
 "thumbnailUrl": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_t.jpg",
 "hfov": 360
},
{
 "partial": false,
 "class": "Panorama",
 "label": "Surgical ICU",
 "id": "panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C",
 "pitch": 0,
 "hfovMax": 130,
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "colCount": 8,
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4,
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2",
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_D8B5C85C_FA98_844E_41E2_B25A3A4BFB8E"
 ],
 "thumbnailUrl": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_t.jpg",
 "hfov": 360
},
{
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipBorderSize": 1,
 "progressBorderSize": 0,
 "minHeight": 50,
 "toolTipPaddingRight": 10,
 "width": "100%",
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingTop": 7,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "minWidth": 100,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 10,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 5,
 "class": "ViewerArea",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "height": "100%",
 "borderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "top": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "transitionDuration": 500,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF"
},
{
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "layout": "absolute",
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "width": 330,
 "paddingLeft": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "layout": "absolute",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--INFO photo"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingTop": 0
},
{
 "layout": "absolute",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingTop": 0
},
{
 "layout": "absolute",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--LOCATION"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingTop": 0
},
{
 "layout": "absolute",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingTop": 0
},
{
 "layout": "absolute",
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "right": "0%",
 "contentOpaque": false,
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "class": "Container",
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--REALTOR"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingTop": 0
},
{
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "minHeight": 1,
 "width": 58,
 "paddingLeft": 0,
 "maxWidth": 58,
 "right": "1.61%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "top": "2.43%",
 "propagateClick": true,
 "height": 58,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "mode": "toggle",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "maxHeight": 58,
 "paddingTop": 0
},
{
 "scaleMode": "fit_inside",
 "id": "Image_C531E783_E036_B906_41C2_473921148D5F",
 "minHeight": 1,
 "paddingLeft": 0,
 "maxWidth": 1472,
 "width": "9.891%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "right": "1.15%",
 "minWidth": 1,
 "url": "skin/Image_C531E783_E036_B906_41C2_473921148D5F.png",
 "borderRadius": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": "9.046%",
 "paddingRight": 0,
 "class": "Image",
 "click": "this.openLink('http://www.panoraproperties.com', '_blank')",
 "bottom": "0%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "Image41967"
 },
 "maxHeight": 608,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "fontFamily": "Segoe Print",
 "id": "Label_C559C0ED_E037_F703_41C7_659205F9FE23",
 "minHeight": 1,
 "paddingLeft": 0,
 "width": "11.885%",
 "paddingBottom": 0,
 "textShadowHorizontalLength": 1,
 "backgroundOpacity": 0,
 "right": "0%",
 "text": "Developed by:",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "textShadowVerticalLength": 1,
 "height": "4.52%",
 "paddingRight": 0,
 "class": "Label",
 "fontSize": "2vmin",
 "bottom": "7.83%",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "fontStyle": "normal",
 "textShadowBlurRadius": 3,
 "data": {
  "name": "Label42068"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "paddingTop": 0,
 "fontWeight": "normal",
 "textShadowColor": "#000000",
 "textShadowOpacity": 0.54
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -135.06,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.36,
   "pitch": 2.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_0_0.png",
      "width": 739,
      "class": "ImageResourceLevel",
      "height": 785
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.16,
   "yaw": -135.06,
   "distance": 50
  }
 ],
 "id": "overlay_DEB41928_FB69_85F6_41EB_ABBEEAEAE809",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -46.3,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.88,
   "pitch": 1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_1_0.png",
      "width": 558,
      "class": "ImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1,
   "yaw": -46.3,
   "distance": 50
  }
 ],
 "id": "overlay_DCF5986D_FB6B_844E_4187_44E678CC066B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 126.17,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.92,
   "pitch": 4.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_2_0.png",
      "width": 494,
      "class": "ImageResourceLevel",
      "height": 594
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.14,
   "yaw": 126.17,
   "distance": 50
  }
 ],
 "id": "overlay_DDD468E9_FB68_8476_41EC_5D5AD5D1B7A2",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_3_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -117.54,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.09,
   "pitch": 15.36
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_3_0.png",
      "width": 1134,
      "class": "ImageResourceLevel",
      "height": 696
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.36,
   "yaw": -117.54,
   "hfov": 33.09,
   "distance": 50
  }
 ],
 "id": "overlay_DD7A3A39_FB68_87D6_41EE_DD1AC7283EDE",
 "data": {
  "label": "Labour\u000dRoom"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_4_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -36.55,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 33.99,
   "pitch": 7.96
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_4_0.png",
      "width": 1134,
      "class": "ImageResourceLevel",
      "height": 482
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.96,
   "yaw": -36.55,
   "hfov": 33.99,
   "distance": 50
  }
 ],
 "id": "overlay_DCC9EFC4_FB69_7CBE_41C2_A75AE1BD0CEE",
 "data": {
  "label": "NICU"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_5_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 131.95,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 32.75,
   "pitch": 17.42
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_5_0.png",
      "width": 1134,
      "class": "ImageResourceLevel",
      "height": 696
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.42,
   "yaw": 131.95,
   "hfov": 32.75,
   "distance": 50
  }
 ],
 "id": "overlay_D38B9BF4_FB68_845E_41EB_64FBC0306213",
 "data": {
  "label": "Operation\u000dtheatre"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_6_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 7.87,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.52,
   "pitch": -13.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_6_0.png",
      "width": 596,
      "class": "ImageResourceLevel",
      "height": 503
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.76,
   "yaw": 7.87,
   "distance": 50
  }
 ],
 "id": "overlay_DD8A634C_FB78_844E_41D4_5160ADDF58B6",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_7_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 29.69,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 34.27,
   "pitch": -3.17
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB1C24_FA9B_83FE_41CB_CC575384C912_0_HS_7_0.png",
      "width": 1134,
      "class": "ImageResourceLevel",
      "height": 696
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.17,
   "yaw": 29.69,
   "hfov": 34.27,
   "distance": 50
  }
 ],
 "id": "overlay_DDC7557F_FB78_8C4A_41E4_07E470D479A2",
 "data": {
  "label": "First\u000dFloor"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -111.71,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 32.63,
   "pitch": 9.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 32.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D92B60_FA98_8476_41D4_18A0E7D587F5_0_HS_0_0.png",
      "width": 1093,
      "class": "ImageResourceLevel",
      "height": 957
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.49,
   "yaw": -111.71,
   "distance": 50
  }
 ],
 "id": "overlay_D9C909DD_FA9F_844E_41E8_AA8A674E1757",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 63.86,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.25,
   "pitch": -7.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D91C9A97_FA9B_84D9_41E7_6541A6541BBB",
   "pitch": -7.78,
   "yaw": 63.86,
   "hfov": 8.25,
   "distance": 100
  }
 ],
 "id": "overlay_DBCAC624_FAA8_8FFE_41D9_4F16C008EC28",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -29.26,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.03,
   "pitch": 3.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_1_0.png",
      "width": 696,
      "class": "ImageResourceLevel",
      "height": 606
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.01,
   "yaw": -29.26,
   "distance": 50
  }
 ],
 "id": "overlay_DB2E0B79_FAA8_8456_41BD_8C7D9B2DFC99",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -127.41,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.1,
   "pitch": 0.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_2_0.png",
      "width": 433,
      "class": "ImageResourceLevel",
      "height": 470
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.61,
   "yaw": -127.41,
   "distance": 50
  }
 ],
 "id": "overlay_D8C8D39A_FA99_84CA_41E5_B0A42D137059",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_3_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -127.17,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.74,
   "pitch": 11.29
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_3_0.png",
      "width": 766,
      "class": "ImageResourceLevel",
      "height": 653
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.29,
   "yaw": -127.17,
   "hfov": 22.74,
   "distance": 50
  }
 ],
 "id": "overlay_D81E68D4_FA98_845E_4194_73AA5AE1DC54",
 "data": {
  "label": "PAEDS\u000dICU"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_4_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 47.39,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.29,
   "pitch": 0.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_4_0.png",
      "width": 505,
      "class": "ImageResourceLevel",
      "height": 442
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.2,
   "yaw": 47.39,
   "distance": 50
  }
 ],
 "id": "overlay_D84FC2DF_FA98_844A_41C9_73BCB6444CD4",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_5_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 83.63,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.33,
   "pitch": 17.14
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_5_0.png",
      "width": 392,
      "class": "ImageResourceLevel",
      "height": 254
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.14,
   "yaw": 83.63,
   "hfov": 11.33,
   "distance": 50
  }
 ],
 "id": "overlay_D99D2CFA_FA99_9C4A_41D0_35777E1EF8C0",
 "data": {
  "label": "SECOND\u000dFLOOR"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_6_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -50.41,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 28.37,
   "pitch": 3.73
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_6_0.png",
      "width": 940,
      "class": "ImageResourceLevel",
      "height": 653
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.73,
   "yaw": -50.41,
   "hfov": 28.37,
   "distance": 50
  }
 ],
 "id": "overlay_DE72B814_FA99_83DE_41E5_E6B55E600511",
 "data": {
  "label": "SURGICAL\u000dICU"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_7_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 87.68,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.86,
   "pitch": 11.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_DDAC5E0D_FB78_BFCE_41A8_5938B35411AB",
   "pitch": 11.71,
   "yaw": 87.68,
   "hfov": 6.86,
   "distance": 100
  }
 ],
 "id": "overlay_DEF003FF_FB68_844A_41A3_936602D21665",
 "data": {
  "label": "Arrow 01"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_8_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 51.26,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 27.71,
   "pitch": 12.68
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_8_0.png",
      "width": 938,
      "class": "ImageResourceLevel",
      "height": 624
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.68,
   "yaw": 51.26,
   "hfov": 27.71,
   "distance": 50
  }
 ],
 "id": "overlay_DCF5CE8B_FB68_BCCA_41DE_0AF7B3A67778",
 "data": {
  "label": "MINOR\u000dOPERATION\u000dTHEATRE"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -176.77,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.67,
   "pitch": 3.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D850EF_FA98_844A_41C7_CEDB5E078F68_0_HS_0_0.png",
      "width": 485,
      "class": "ImageResourceLevel",
      "height": 612
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.17,
   "yaw": -176.77,
   "distance": 50
  }
 ],
 "id": "overlay_E7306495_FAB8_8CDE_41D4_00FA00DB7844",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -100.18,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.11,
   "pitch": -22.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E56E66F9_FAB8_8C56_41BA_13816B9969B5",
   "pitch": -22.02,
   "yaw": -100.18,
   "hfov": 13.11,
   "distance": 50
  }
 ],
 "id": "overlay_EC443D1D_FAE8_BDCE_41E5_45DD8F88B784",
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -98.56,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.77,
   "pitch": -30.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E2B1719B_FAF8_84CA_41E9_F4BCEFD70E85",
   "pitch": -30.25,
   "yaw": -98.56,
   "hfov": 14.77,
   "distance": 100
  }
 ],
 "id": "overlay_E965850A_FAE8_8DCA_41E4_14EF527C5EEC",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -76.21,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.4,
   "pitch": -25.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E2B60199_FAF8_84D6_41E5_9031E70731EA",
   "pitch": -25.15,
   "yaw": -76.21,
   "hfov": 21.4,
   "distance": 100
  }
 ],
 "id": "overlay_E9E95381_FAEF_84B6_41D5_10928CA21097",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 69.7,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.97,
   "pitch": 2.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_1_HS_1_0.png",
      "width": 594,
      "class": "ImageResourceLevel",
      "height": 531
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.08,
   "yaw": 69.7,
   "distance": 50
  }
 ],
 "id": "overlay_E9ECB364_FAE8_847E_41C3_B6AB7A12D542",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -39.91,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.24,
   "pitch": -12.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E2B1319B_FAF8_84CA_41E9_B9F7BF7FE000",
   "pitch": -12.77,
   "yaw": -39.91,
   "hfov": 12.24,
   "distance": 100
  }
 ],
 "id": "overlay_F559F424_FA97_83FE_41CE_18721B524913",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_1_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -39.97,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 29.13,
   "pitch": -6.34
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_1_0.png",
      "width": 969,
      "class": "ImageResourceLevel",
      "height": 254
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.34,
   "yaw": -39.97,
   "hfov": 29.13,
   "distance": 50
  }
 ],
 "id": "overlay_EAC4F2D9_FA97_8449_41D1_E25B4C067169",
 "data": {
  "label": "Medical Ward"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -87.88,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.02,
   "pitch": -11.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E2B1A19B_FAF8_84CA_41E5_80EBF5777124",
   "pitch": -11.85,
   "yaw": -87.88,
   "hfov": 17.02,
   "distance": 100
  }
 ],
 "id": "overlay_EBB32F80_FA99_7CB6_41D9_B118548DE081",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -134.28,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.48,
   "pitch": 7.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E2B0219B_FAF8_84CA_41D0_AD2BDB48D1CC",
   "pitch": 7.52,
   "yaw": -134.28,
   "hfov": 14.48,
   "distance": 100
  }
 ],
 "id": "overlay_EBA1AA85_FA98_84BE_41E7_477F5466F1E1",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_4_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -171.45,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.14,
   "pitch": 11.42
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_4_0.png",
      "width": 342,
      "class": "ImageResourceLevel",
      "height": 253
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.42,
   "yaw": -171.45,
   "hfov": 10.14,
   "distance": 50
  }
 ],
 "id": "overlay_EB18C4B7_FA98_8CDA_41EB_83523748A2CA",
 "data": {
  "label": "EXIT"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -179.57,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.3,
   "pitch": 11.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E2B0A19B_FAF8_84CA_4180_6176DAC71EEA",
   "pitch": 11.87,
   "yaw": -179.57,
   "hfov": 14.3,
   "distance": 100
  }
 ],
 "id": "overlay_E83B9E52_FA98_9C5A_41ED_975EC8E239E5",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_6_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -130.25,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.29,
   "pitch": 12.46
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_6_0.png",
      "width": 686,
      "class": "ImageResourceLevel",
      "height": 253
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.46,
   "yaw": -130.25,
   "hfov": 20.29,
   "distance": 50
  }
 ],
 "id": "overlay_E888F65F_FA99_8C49_41D4_8291D787E2CD",
 "data": {
  "label": "First Floor"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_7_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 90.71,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.02,
   "pitch": -11.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E2B3219B_FAF8_84C8_41C5_DB8EE618E24B",
   "pitch": -11.84,
   "yaw": 90.71,
   "hfov": 17.02,
   "distance": 100
  }
 ],
 "id": "overlay_E8DA96AC_FA98_8CCE_41E3_93BBA742F2A1",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -56.56,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.95,
   "pitch": 10.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E68CE7_FAA8_9C7A_4190_2EF380FC592A_0_HS_0_0.png",
      "width": 703,
      "class": "ImageResourceLevel",
      "height": 694
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.07,
   "yaw": -56.56,
   "distance": 50
  }
 ],
 "id": "overlay_D97CA19D_FA99_84CE_41EE_1DD6EC60A1C0",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 136.59,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.36,
   "pitch": 5.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_0_0.png",
      "width": 477,
      "class": "ImageResourceLevel",
      "height": 396
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.68,
   "yaw": 136.59,
   "distance": 50
  }
 ],
 "id": "overlay_E4897EBD_FAB8_9CCE_41ED_E40A04B1599C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 30.95,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.32,
   "pitch": 1.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_1_0.png",
      "width": 209,
      "class": "ImageResourceLevel",
      "height": 229
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.87,
   "yaw": 30.95,
   "distance": 50
  }
 ],
 "id": "overlay_E5FFD59E_FAB7_8CCA_41DB_2936184F3986",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -10.43,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.61,
   "pitch": 1.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_2_0.png",
      "width": 284,
      "class": "ImageResourceLevel",
      "height": 302
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.31,
   "yaw": -10.43,
   "distance": 50
  }
 ],
 "id": "overlay_DAD1C6CC_FAA8_8C4E_41DE_5D6D3FC2FD5C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -126.03,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.66,
   "pitch": -25.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_3_0.png",
      "width": 498,
      "class": "ImageResourceLevel",
      "height": 381
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.03,
   "yaw": -126.03,
   "distance": 50
  }
 ],
 "id": "overlay_E5A6DE76_FAAB_BC5A_41DC_BE6C520FC59C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_4_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -122.88,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.39,
   "pitch": -12.23
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_4_0.png",
      "width": 859,
      "class": "ImageResourceLevel",
      "height": 588
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.23,
   "yaw": -122.88,
   "hfov": 25.39,
   "distance": 50
  }
 ],
 "id": "overlay_E590AD07_FAAB_BDBA_41E1_F3E139149E64",
 "data": {
  "label": "Ground\u000dFloor"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_5_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -81.62,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.98,
   "pitch": 0.91
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_5_0.png",
      "width": 859,
      "class": "ImageResourceLevel",
      "height": 588
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.91,
   "yaw": -81.62,
   "hfov": 25.98,
   "distance": 50
  }
 ],
 "id": "overlay_DA5B6740_FAA8_8DB6_41BB_0AC1A2B08992",
 "data": {
  "label": "Second\u000dFloor"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_6_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -84.14,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.18,
   "pitch": -10.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D9227A95_FA9B_84DE_41DF_C56E10EE5CD2",
   "pitch": -10.57,
   "yaw": -84.14,
   "hfov": 13.18,
   "distance": 100
  }
 ],
 "id": "overlay_E5CE6E0F_FAA9_9FCA_41D6_2E1144F792AD",
 "data": {
  "label": "Arrow 01"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_7_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 8.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.14,
   "pitch": -17.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D91DBA95_FA9B_84DE_41E5_5F02E4758B68",
   "pitch": -17.93,
   "yaw": 8.89,
   "hfov": 19.14,
   "distance": 100
  }
 ],
 "id": "overlay_DA03433B_FAA8_85CA_41E5_23979ECBC673",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_8_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -20.28,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.34,
   "pitch": 8.47
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_8_0.png",
      "width": 512,
      "class": "ImageResourceLevel",
      "height": 406
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.47,
   "yaw": -20.28,
   "hfov": 15.34,
   "distance": 50
  }
 ],
 "id": "overlay_DCF667B7_FA97_8CD8_41EB_15D3F5397E34",
 "data": {
  "label": "PEADS\u000dWARD"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -84.44,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.38,
   "pitch": 3.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_0_0.png",
      "width": 476,
      "class": "ImageResourceLevel",
      "height": 458
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.72,
   "yaw": -84.44,
   "distance": 50
  }
 ],
 "id": "overlay_ED9BC4FE_FAE9_8C4A_41E8_81B3B7951EB2",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_1_0_map.gif",
      "width": 35,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 63.93,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 36.39,
   "pitch": 16.77
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_1_0.png",
      "width": 1256,
      "class": "ImageResourceLevel",
      "height": 566
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.77,
   "yaw": 63.93,
   "hfov": 36.39,
   "distance": 50
  }
 ],
 "id": "overlay_EC098EAD_FAE9_BCCE_41D6_4A0722DE381B",
 "data": {
  "label": "Dermatology \u000dDepartment"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_2_0_map.gif",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -91.79,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 65.7,
   "pitch": 17.24
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_2_0.png",
      "width": 2048,
      "class": "ImageResourceLevel",
      "height": 331
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.24,
   "yaw": -91.79,
   "hfov": 65.7,
   "distance": 50
  }
 ],
 "id": "overlay_EC545D65_FA98_BC7E_41C1_BFFE90B0AD5F",
 "data": {
  "label": "Physiotherapy Clinic"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_3_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 67.13,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.95,
   "pitch": 2.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_3_0.png",
      "width": 494,
      "class": "ImageResourceLevel",
      "height": 440
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.69,
   "yaw": 67.13,
   "distance": 50
  }
 ],
 "id": "overlay_EDC340CA_FA98_844A_41DA_5DB50115E70D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_4_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 53.74,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.95,
   "pitch": 2.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_4_0.png",
      "width": 494,
      "class": "ImageResourceLevel",
      "height": 440
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.35,
   "yaw": 53.74,
   "distance": 50
  }
 ],
 "id": "overlay_EDA13999_FA98_84C9_41DC_4D11E045E8A7",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 28.63,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.81,
   "pitch": -17.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E56A56F1_FAB8_8C56_41D2_FB17D5AA0B7D",
   "pitch": -17.06,
   "yaw": 28.63,
   "hfov": 20.81,
   "distance": 100
  }
 ],
 "id": "overlay_EDC718B8_FA98_84D6_41EE_5CD3FBED69C4",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_6_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -63,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.89,
   "pitch": -16.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E56AC6F1_FAB8_8C56_41E2_D35D909E96CF",
   "pitch": -16.37,
   "yaw": -63,
   "hfov": 20.89,
   "distance": 100
  }
 ],
 "id": "overlay_E2AB753D_FA9F_8DCE_41E5_86203A657095",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 146.9,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.61,
   "pitch": 6.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D91E4A9A_FA9B_84CA_41EA_D308F1989B96",
   "pitch": 6.13,
   "yaw": 146.9,
   "hfov": 17.61,
   "distance": 100
  }
 ],
 "id": "overlay_E73DAF9A_FABB_FCCA_41D6_DB139CD02039",
 "data": {
  "label": "Circle Arrow 02"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_8_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 140.56,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.59,
   "pitch": 16.09
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_8_0.png",
      "width": 605,
      "class": "ImageResourceLevel",
      "height": 566
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.09,
   "yaw": 140.56,
   "hfov": 17.59,
   "distance": 50
  }
 ],
 "id": "overlay_E7D0BCA5_FABB_7CFE_41E9_AE0F770AEDA8",
 "data": {
  "label": "First \u000dFloor"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -84.53,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.83,
   "pitch": 7.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0_HS_0_0.png",
      "width": 594,
      "class": "ImageResourceLevel",
      "height": 694
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.5,
   "yaw": -84.53,
   "distance": 50
  }
 ],
 "id": "overlay_EFA080E9_FAE8_8476_41BF_438219B77A37",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 81.13,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.17,
   "pitch": -33.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E56EB6F9_FAB8_8C56_41C9_9E401D71CBC3",
   "pitch": -33.55,
   "yaw": 81.13,
   "hfov": 15.17,
   "distance": 100
  }
 ],
 "id": "overlay_EC8E0F13_FAEB_BDDA_41EA_1AACA4E8213B",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 140.6,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.92,
   "pitch": 8.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D82CAF_FA97_BCC9_41D5_200C510961CA_0_HS_0_0.png",
      "width": 866,
      "class": "ImageResourceLevel",
      "height": 994
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.67,
   "yaw": 140.6,
   "distance": 50
  }
 ],
 "id": "overlay_E6746090_FAA8_84D6_41C1_759EFD8CF9FC",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -155.5,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.01,
   "pitch": 5.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D96B14_FA98_85DE_41D8_5A06F3983970_0_HS_0_0.png",
      "width": 730,
      "class": "ImageResourceLevel",
      "height": 939
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.16,
   "yaw": -155.5,
   "distance": 50
  }
 ],
 "id": "overlay_DD0843EF_FB77_844A_41E9_B0CE01220C25",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 56.04,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.12,
   "pitch": 3.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E9DEAF_FAA9_9CCA_41EA_3DC5454E8414_0_HS_0_0.png",
      "width": 567,
      "class": "ImageResourceLevel",
      "height": 531
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.72,
   "yaw": 56.04,
   "distance": 50
  }
 ],
 "id": "overlay_E01DCC51_FAA8_FC56_41D6_BDB4BFD3154D",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.25,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.54,
   "pitch": -33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E2B7718D_FAF8_84CE_41E5_EFEF902D0951",
   "pitch": -33,
   "yaw": 1.25,
   "hfov": 14.54,
   "distance": 100
  }
 ],
 "id": "overlay_F7C2D2BE_FAA8_84CA_41B2_4DE3ADF65B7B",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -78.9,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.86,
   "pitch": 0.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB8C2F_FA99_83CA_41DD_D0EAB3D429B6_0_HS_0_0.png",
      "width": 458,
      "class": "ImageResourceLevel",
      "height": 494
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.15,
   "yaw": -78.9,
   "distance": 50
  }
 ],
 "id": "overlay_E7F9BC07_FAB8_83BA_41E7_EAC81853FA87",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -52.95,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.2,
   "pitch": 3.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB7CAE_FA9B_FCC8_41E7_51C5CA375DDD_0_HS_0_0.png",
      "width": 403,
      "class": "ImageResourceLevel",
      "height": 431
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.04,
   "yaw": -52.95,
   "distance": 50
  }
 ],
 "id": "overlay_DBB9888B_FAA9_84CA_41EB_67126F5D9431",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -49.5,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.25,
   "pitch": -9.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E56DD6F4_FAB8_8C5E_41C6_A8A3A00E8F92",
   "pitch": -9.52,
   "yaw": -49.5,
   "hfov": 7.25,
   "distance": 100
  }
 ],
 "id": "overlay_E352255F_FA9B_8C4A_41E2_A42D76A82F26",
 "data": {
  "label": "Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -66.1,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.06,
   "pitch": 1.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_1_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 188
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.5,
   "yaw": -66.1,
   "distance": 50
  }
 ],
 "id": "overlay_E2ADD7B3_FA99_8CDA_41E5_93217A2C0F2F",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -77.53,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.06,
   "pitch": 1.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_2_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 188
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.38,
   "yaw": -77.53,
   "distance": 50
  }
 ],
 "id": "overlay_E25729D9_FA99_8456_41D4_5C69CF4EF48B",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_3_0_map.gif",
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 144.88,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.28,
   "pitch": 5.55
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_3_0.png",
      "width": 707,
      "class": "ImageResourceLevel",
      "height": 336
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.55,
   "yaw": 144.88,
   "hfov": 21.28,
   "distance": 50
  }
 ],
 "id": "overlay_ED37018B_FA98_84CA_41C1_E18AB59C1E4C",
 "data": {
  "label": "Dental\u000dDepartment"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 57.67,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.68,
   "pitch": 0.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_4_0.png",
      "width": 220,
      "class": "ImageResourceLevel",
      "height": 242
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.33,
   "yaw": 57.67,
   "distance": 50
  }
 ],
 "id": "overlay_E27A2D98_FAA8_BCD6_41EA_CBD1DD86C155",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 73.17,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.68,
   "pitch": 0.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_5_0.png",
      "width": 220,
      "class": "ImageResourceLevel",
      "height": 242
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.33,
   "yaw": 73.17,
   "distance": 50
  }
 ],
 "id": "overlay_E3F016F2_FAA8_8C5A_41C6_A8720AED4DD5",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_6_0_map.gif",
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -70.94,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.19,
   "pitch": 7.73
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_6_0.png",
      "width": 707,
      "class": "ImageResourceLevel",
      "height": 336
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.73,
   "yaw": -70.94,
   "hfov": 21.19,
   "distance": 50
  }
 ],
 "id": "overlay_E22E6EA5_FAAB_9CFE_41E5_EEBB10650654",
 "data": {
  "label": "Dermatology\u000dDepartment"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_7_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 143.99,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.94,
   "pitch": -0.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_7_0.png",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.73,
   "yaw": 143.99,
   "distance": 50
  }
 ],
 "id": "overlay_E213E129_FAA8_85C9_41EA_BACBEB11D80C",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_8_0_map.gif",
      "width": 33,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 65.86,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.2,
   "pitch": 7.39
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_8_0.png",
      "width": 707,
      "class": "ImageResourceLevel",
      "height": 336
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.39,
   "yaw": 65.86,
   "hfov": 21.2,
   "distance": 50
  }
 ],
 "id": "overlay_E23BE3BF_FAA8_84CA_41CD_116CE56E8C60",
 "data": {
  "label": "OpthamologyDepartment"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_9_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 6.89,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.83,
   "pitch": -7.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E56F86F9_FAB8_8C56_41D9_C0BC796617F2",
   "pitch": -7.34,
   "yaw": 6.89,
   "hfov": 6.83,
   "distance": 100
  }
 ],
 "id": "overlay_E0DE5226_FAA8_87FB_41DD_F86C497715AB",
 "data": {
  "label": "Arrow 01b"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -13.06,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.84,
   "pitch": -37.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E2B241A3_FAF8_84FA_41A2_48398F4ADC1F",
   "pitch": -37.17,
   "yaw": -13.06,
   "hfov": 18.84,
   "distance": 100
  }
 ],
 "id": "overlay_EB2BE25B_FAE8_844A_41E3_B40E28A90CE4",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 88.18,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.31,
   "pitch": -19.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E2B201A3_FAF8_84FA_41CA_1016C16CF5FC",
   "pitch": -19.33,
   "yaw": 88.18,
   "hfov": 22.31,
   "distance": 100
  }
 ],
 "id": "overlay_E99DB495_FAE8_8CDE_41DB_E5D42ADA6EC8",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 62.64,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.1,
   "pitch": -14.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E2B2B1A3_FAF8_84FA_41EB_6CDEE150877F",
   "pitch": -14.89,
   "yaw": 62.64,
   "hfov": 12.1,
   "distance": 50
  }
 ],
 "id": "overlay_E9A7CDAA_FAE9_BCCA_41D0_D0FE90570576",
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_0_HS_3_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 61.1,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.19,
   "pitch": -6.15
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_0_HS_3_0.png",
      "width": 77,
      "class": "ImageResourceLevel",
      "height": 52
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.15,
   "yaw": 61.1,
   "hfov": 13.19,
   "distance": 50
  }
 ],
 "id": "overlay_EE3F0A86_FAF8_84BA_41D8_A833322C15B6",
 "data": {
  "label": "Lab"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 142.8,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.75,
   "pitch": 3.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DAA99F_FA99_84CA_41E2_E0484DACA45D_0_HS_0_0.png",
      "width": 522,
      "class": "ImageResourceLevel",
      "height": 531
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.86,
   "yaw": 142.8,
   "distance": 50
  }
 ],
 "id": "overlay_E67B722A_FAB7_87CA_41E2_6335A017DCF7",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 168.67,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.69,
   "pitch": 8.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E7A704_FAA8_8DBE_41DC_9EE2DF11C480_0_HS_0_0.png",
      "width": 658,
      "class": "ImageResourceLevel",
      "height": 585
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.39,
   "yaw": 168.67,
   "distance": 50
  }
 ],
 "id": "overlay_E100A833_FAA8_83DA_41C8_D6B4F9336E35",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0_HS_0_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -153.51,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.23,
   "pitch": 2.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0E73CFE_FAA9_9C4A_41ED_7E9C07634F43_0_HS_0_0.png",
      "width": 503,
      "class": "ImageResourceLevel",
      "height": 503
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.28,
   "yaw": -153.51,
   "distance": 50
  }
 ],
 "id": "overlay_E16F909B_FAAB_84CA_41EB_C03DA241F7D5",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -173.7,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.39,
   "pitch": -1.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0DB8766_FA98_8C7A_41E2_456148389C89_0_HS_0_0.png",
      "width": 376,
      "class": "ImageResourceLevel",
      "height": 431
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.49,
   "yaw": -173.7,
   "distance": 50
  }
 ],
 "id": "overlay_DAA836FB_FAA8_8C4A_41A8_51187A24A0CB",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 59.99,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.01,
   "pitch": -18.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E56846EC_FAB8_8C4E_41CC_BA9B63DA00CE",
   "pitch": -18.38,
   "yaw": 59.99,
   "hfov": 17.01,
   "distance": 100
  }
 ],
 "id": "overlay_EC8D11CF_FAEB_844A_41E8_146CE88FFE35",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -121.55,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.21,
   "pitch": -25.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_E56836EC_FAB8_8C4E_41EA_056C36969B0E",
   "pitch": -25.24,
   "yaw": -121.55,
   "hfov": 16.21,
   "distance": 100
  }
 ],
 "id": "overlay_EC2FD7FD_FAEB_8C4E_41E1_F86317ACED16",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 175.88,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23.68,
   "pitch": 4.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D9742A_FA99_83CA_41BE_60812145BDC6_0_HS_0_0.png",
      "width": 785,
      "class": "ImageResourceLevel",
      "height": 848
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.46,
   "yaw": 175.88,
   "distance": 50
  }
 ],
 "id": "overlay_DD5ED7D7_FB78_8C5A_41AC_E664C9B52E30",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 159.82,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 37.19,
   "pitch": 1.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 37.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0EACBB1_FAA8_84D6_41DA_EE3D70A2A804_0_HS_0_0.png",
      "width": 1230,
      "class": "ImageResourceLevel",
      "height": 921
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.66,
   "yaw": 159.82,
   "distance": 50
  }
 ],
 "id": "overlay_DD556506_FB78_8DBA_41EE_1CF8DCAB1E9A",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -143.24,
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.39,
   "pitch": 4.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F0D96DD0_FA99_7C56_41CE_5E06768B431C_0_HS_0_0.png",
      "width": 676,
      "class": "ImageResourceLevel",
      "height": 649
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.68,
   "yaw": -143.24,
   "distance": 50
  }
 ],
 "id": "overlay_D8B5C85C_FA98_844E_41E2_B25A3A4BFB8E",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "layout": "absolute",
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "width": 66,
 "paddingLeft": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "height": "100%",
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "- COLLAPSE"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingTop": 0
},
{
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "layout": "absolute",
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "minHeight": 1,
 "width": 330,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "right": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "paddingRight": 0,
 "class": "Container",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "- EXPANDED"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "shadowSpread": 1,
 "layout": "horizontal",
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "right": "15%",
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "top": "10%",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "10%",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": true,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "layout": "vertical",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "paddingLeft": 0,
 "minHeight": 1,
 "right": "15%",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "top": "10%",
 "propagateClick": false,
 "paddingRight": 20,
 "class": "Container",
 "overflow": "visible",
 "bottom": "80%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 20
},
{
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowSpread": 1,
 "layout": "absolute",
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "right": "15%",
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "top": "10%",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "10%",
 "overflow": "visible",
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "shadow": true,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "shadowSpread": 1,
 "layout": "horizontal",
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "right": "15%",
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "top": "10%",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "10%",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": true,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "layout": "vertical",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "paddingLeft": 0,
 "minHeight": 1,
 "right": "15%",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "top": "10%",
 "propagateClick": true,
 "paddingRight": 20,
 "class": "Container",
 "overflow": "visible",
 "bottom": "80%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 20
},
{
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowSpread": 1,
 "layout": "vertical",
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "right": "15%",
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "top": "10%",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "10%",
 "overflow": "visible",
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "shadow": true,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "shadowSpread": 1,
 "layout": "horizontal",
 "paddingLeft": 0,
 "shadowBlurRadius": 25,
 "minHeight": 1,
 "right": "15%",
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "shadowColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "verticalAlign": "top",
 "top": "10%",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 0,
 "paddingRight": 0,
 "class": "Container",
 "borderSize": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "10%",
 "overflow": "scroll",
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": true,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Global"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "layout": "vertical",
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "paddingLeft": 0,
 "minHeight": 1,
 "right": "15%",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "top": "10%",
 "propagateClick": false,
 "paddingRight": 20,
 "class": "Container",
 "overflow": "visible",
 "bottom": "80%",
 "borderSize": 0,
 "horizontalAlign": "right",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container X global"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 20
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_D91C9A97_FA9B_84D9_41E7_6541A6541BBB",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "frameCount": 9,
 "colCount": 3,
 "id": "AnimatedImageResource_DDAC5E0D_FB78_BFCE_41A8_5938B35411AB",
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_F0D830DE_FA98_844A_41EE_9BD7D1B684B2_0_HS_7_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "frameCount": 9,
 "colCount": 3,
 "id": "AnimatedImageResource_E56E66F9_FAB8_8C56_41BA_13816B9969B5",
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_F0E9BACD_FAAB_844E_41D3_FCE51DB9659A_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E2B1719B_FAF8_84CA_41E9_F4BCEFD70E85",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0DA7646_FA98_8FBA_41DA_7ADD3B2C5EA8_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E2B60199_FAF8_84D6_41E5_9031E70731EA",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0DD8051_FA9F_8456_41E6_285195B2AE4D_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E2B1319B_FAF8_84CA_41E9_B9F7BF7FE000",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E2B1A19B_FAF8_84CA_41E5_80EBF5777124",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E2B0219B_FAF8_84CA_41D0_AD2BDB48D1CC",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E2B0A19B_FAF8_84CA_4180_6176DAC71EEA",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E2B3219B_FAF8_84C8_41C5_DB8EE618E24B",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0DAA975_FA98_845E_41E7_D31893FD2562_1_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "frameCount": 9,
 "colCount": 3,
 "id": "AnimatedImageResource_D9227A95_FA9B_84DE_41DF_C56E10EE5CD2",
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_6_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_D91DBA95_FA9B_84DE_41E5_5F02E4758B68",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0DA3BF0_FA98_8458_41B7_20B6D4D632D1_0_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E56A56F1_FAB8_8C56_41D2_FB17D5AA0B7D",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E56AC6F1_FAB8_8C56_41E2_D35D909E96CF",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_D91E4A9A_FA9B_84CA_41EA_D308F1989B96",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0E7D77A_FAA8_8C4A_41C4_E0FAD07063E7_0_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E56EB6F9_FAB8_8C56_41C9_9E401D71CBC3",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0E608B9_FAAB_84D6_41E4_6DBAEBFFA229_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E2B7718D_FAF8_84CE_41E5_EFEF902D0951",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0170C76_FA98_9C5A_41D4_99F2BB7FAE6F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "frameCount": 9,
 "colCount": 3,
 "id": "AnimatedImageResource_E56DD6F4_FAB8_8C5E_41C6_A8A3A00E8F92",
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "frameCount": 9,
 "colCount": 3,
 "id": "AnimatedImageResource_E56F86F9_FAB8_8C56_41D9_C0BC796617F2",
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_F0E683E7_FAA8_847A_41E4_CBD38AD1980A_0_HS_9_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E2B241A3_FAF8_84FA_41A2_48398F4ADC1F",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E2B201A3_FAF8_84FA_41CA_1016C16CF5FC",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "frameCount": 9,
 "colCount": 3,
 "id": "AnimatedImageResource_E2B2B1A3_FAF8_84FA_41EB_6CDEE150877F",
 "rowCount": 3,
 "levels": [
  {
   "url": "media/panorama_F5AFC83F_FAA9_83CA_41E8_4E04B9727AF5_1_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E56846EC_FAB8_8C4E_41CC_BA9B63DA00CE",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "frameCount": 24,
 "colCount": 4,
 "id": "AnimatedImageResource_E56836EC_FAB8_8C4E_41EA_056C36969B0E",
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F0D8BE8D_FA97_BCCE_41EB_EE14165EAFCF_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "layout": "absolute",
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "width": 36,
 "paddingLeft": 0,
 "minHeight": 1,
 "paddingBottom": 0,
 "backgroundOpacity": 0.4,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container black"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "width": 50,
 "paddingLeft": 0,
 "maxWidth": 80,
 "minHeight": 1,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "top": "40%",
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "bottom": "40%",
 "borderSize": 0,
 "mode": "push",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton arrow"
 },
 "maxHeight": 80,
 "paddingTop": 0,
 "cursor": "hand"
},
{
 "layout": "absolute",
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "90%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "minHeight": 1,
 "width": 50,
 "paddingLeft": 0,
 "maxWidth": 50,
 "right": 9,
 "paddingBottom": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "top": "40%",
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "bottom": "40%",
 "borderSize": 0,
 "mode": "push",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton collapse"
 },
 "maxHeight": 50,
 "paddingTop": 0
},
{
 "layout": "absolute",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "width": "85%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "center",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "layout": "vertical",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "minHeight": 1,
 "paddingLeft": 50,
 "contentOpaque": false,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "width": "50%",
 "scrollBarColor": "#0069A3",
 "minWidth": 460,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 50,
 "class": "Container",
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20
},
{
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "minHeight": 50,
 "paddingLeft": 0,
 "maxWidth": 60,
 "width": "25%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "minWidth": 50,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "height": "75%",
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "mode": "push",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "maxHeight": 60
},
{
 "layout": "absolute",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 140,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "itemHeight": 160,
 "itemLabelFontWeight": "normal",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "minHeight": 1,
 "paddingBottom": 70,
 "rollOverItemThumbnailShadow": true,
 "itemThumbnailScaleMode": "fit_outside",
 "width": "100%",
 "itemLabelFontSize": 16,
 "borderRadius": 5,
 "minWidth": 1,
 "verticalAlign": "middle",
 "itemMinWidth": 50,
 "itemLabelFontColor": "#666666",
 "height": "92%",
 "scrollBarMargin": 2,
 "paddingRight": 70,
 "class": "ThumbnailGrid",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemPaddingRight": 3,
 "borderSize": 0,
 "itemThumbnailHeight": 125,
 "itemThumbnailOpacity": 1,
 "itemPaddingBottom": 3,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundOpacity": 0,
 "scrollBarWidth": 10,
 "gap": 26,
 "itemLabelFontStyle": "italic",
 "scrollBarOpacity": 0.5,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemVerticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "itemOpacity": 1,
 "itemLabelHorizontalAlign": "center",
 "paddingTop": 10,
 "itemMode": "normal",
 "scrollBarColor": "#04A3E1",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemBackgroundColorDirection": "vertical",
 "itemLabelFontFamily": "Oswald",
 "itemMaxWidth": 1000,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemThumbnailWidth": 220,
 "itemMaxHeight": 1000,
 "itemBorderRadius": 0,
 "paddingLeft": 70,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "backgroundOpacity": 0,
 "itemPaddingLeft": 3,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelPosition": "bottom",
 "propagateClick": true,
 "selectedItemThumbnailShadow": true,
 "bottom": -0.2,
 "itemHorizontalAlign": "center",
 "itemBackgroundColor": [],
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemLabelGap": 7,
 "horizontalAlign": "center",
 "shadow": false,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorRatios": [],
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "selectedItemLabelFontWeight": "bold",
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailShadow": false,
 "itemWidth": 220,
 "itemLabelTextDecoration": "none",
 "itemMinHeight": 50
},
{
 "show": "this.openLink('https://www.google.com/maps?ll=31.32483,74.413928&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=12116451256336649237', '_self')",
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "minHeight": 1,
 "paddingLeft": 0,
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minWidth": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "WebFrame",
 "height": "100%",
 "insetBorder": false,
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "WebFrame"
 },
 "paddingTop": 0,
 "scrollEnabled": false
},
{
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "minHeight": 50,
 "paddingLeft": 0,
 "maxWidth": 60,
 "width": "25%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "minWidth": 50,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "height": "75%",
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "mode": "push",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "maxHeight": 60
},
{
 "layout": "absolute",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container photo"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "layout": "absolute",
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "width": "55%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "center",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "layout": "vertical",
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "minHeight": 1,
 "paddingLeft": 60,
 "contentOpaque": false,
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "paddingBottom": 20,
 "backgroundOpacity": 1,
 "width": "45%",
 "scrollBarColor": "#0069A3",
 "minWidth": 460,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 60,
 "class": "Container",
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20
},
{
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "minHeight": 50,
 "paddingLeft": 0,
 "maxWidth": 60,
 "width": "25%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "minWidth": 50,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "height": "75%",
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "mode": "push",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "maxHeight": 60
},
{
 "layout": "absolute",
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "paddingLeft": 40,
 "minHeight": 1,
 "contentOpaque": false,
 "children": [
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88",
  "this.Image_F1E80E1A_E04A_EB06_41E0_51232AE349F6",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5"
 ],
 "paddingBottom": 40,
 "backgroundOpacity": 0.7,
 "width": "100%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "top": "0%",
 "propagateClick": true,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 40,
 "class": "Container",
 "height": "100%",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "- Buttons set"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 40
},
{
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "maxWidth": 2000,
 "minHeight": 1,
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "paddingRight": 0,
 "class": "Image",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "Image"
 },
 "maxHeight": 1000,
 "paddingTop": 0,
 "scaleMode": "fit_outside"
},
{
 "layout": "horizontal",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "minHeight": 0,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 60,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "right",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20
},
{
 "layout": "vertical",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "minHeight": 520,
 "paddingLeft": 0,
 "contentOpaque": false,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarColor": "#E73B2C",
 "minWidth": 100,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "layout": "horizontal",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "minHeight": 1,
 "width": 370,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 40,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "minHeight": 50,
 "paddingLeft": 0,
 "maxWidth": 60,
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "right": 20,
 "cursor": "hand",
 "minWidth": 50,
 "borderRadius": 0,
 "verticalAlign": "top",
 "top": 20,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "height": "36.14%",
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "mode": "push",
 "borderSize": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "maxHeight": 60,
 "paddingTop": 0
},
{
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipBorderSize": 1,
 "progressBorderSize": 0,
 "minHeight": 1,
 "toolTipPaddingRight": 6,
 "width": "100%",
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingTop": 4,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarBottom": 0,
 "class": "ViewerArea",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "height": "100%",
 "borderSize": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingLeft": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "top": "0%",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "vrPointerColor": "#FFFFFF"
},
{
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "maxWidth": 60,
 "minHeight": 50,
 "width": "14.22%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "minWidth": 50,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "top": "20%",
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "bottom": "20%",
 "borderSize": 0,
 "mode": "push",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "maxHeight": 60,
 "paddingTop": 0
},
{
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "minHeight": 50,
 "paddingLeft": 0,
 "maxWidth": 60,
 "right": 10,
 "width": "14.22%",
 "paddingBottom": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 50,
 "verticalAlign": "middle",
 "top": "20%",
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "bottom": "20%",
 "borderSize": 0,
 "mode": "push",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "maxHeight": 60,
 "paddingTop": 0
},
{
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "minHeight": 50,
 "paddingLeft": 0,
 "maxWidth": 60,
 "width": "10%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "right": 20,
 "cursor": "hand",
 "minWidth": 50,
 "borderRadius": 0,
 "verticalAlign": "top",
 "top": 20,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "height": "10%",
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "mode": "push",
 "borderSize": 0,
 "horizontalAlign": "right",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "data": {
  "name": "IconButton X"
 },
 "maxHeight": 60,
 "paddingTop": 0
},
{
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "paddingLeft": 0,
 "maxWidth": 2000,
 "minHeight": 1,
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "bottom",
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "paddingRight": 0,
 "class": "Image",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "Image40635"
 },
 "maxHeight": 1000,
 "paddingTop": 0,
 "scaleMode": "fit_outside"
},
{
 "layout": "horizontal",
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "minHeight": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "right",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 0,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 20
},
{
 "layout": "vertical",
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "minHeight": 520,
 "paddingLeft": 0,
 "contentOpaque": false,
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "paddingBottom": 30,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarColor": "#E73B2C",
 "minWidth": 100,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": "100%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "layout": "horizontal",
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "minHeight": 1,
 "width": 370,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 40,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
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
 "layout": "vertical",
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "minHeight": 1,
 "paddingLeft": 0,
 "right": "0%",
 "contentOpaque": false,
 "paddingBottom": 0,
 "width": "100%",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "top": "26%",
 "propagateClick": true,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "bottom": "26%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-Level 1"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "layout": "vertical",
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "bottom",
 "propagateClick": true,
 "height": 130,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "bottom": "0%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 5,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-Container footer"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 0
},
{
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
 "layout": "vertical",
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "verticalAlign": "middle",
 "top": "25%",
 "propagateClick": true,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "bottom": "25%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-Level 2-1"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingTop": 0
},
{
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813"
 ],
 "layout": "vertical",
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "verticalAlign": "middle",
 "top": "25%",
 "propagateClick": true,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "bottom": "25%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-Level 2-2"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingTop": 0
},
{
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52"
 ],
 "layout": "vertical",
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "verticalAlign": "middle",
 "top": "25%",
 "propagateClick": true,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "bottom": "25%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-Level 2-3"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingTop": 0
},
{
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882"
 ],
 "layout": "vertical",
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "verticalAlign": "middle",
 "top": "25%",
 "propagateClick": true,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "bottom": "25%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-Level 2-4"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingTop": 0
},
{
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189"
 ],
 "layout": "vertical",
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "verticalAlign": "middle",
 "top": "25%",
 "propagateClick": true,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "bottom": "25%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-Level 2-5"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingTop": 0
},
{
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_C4D76E2D_E05A_EB02_41E0_44EF18C2D008"
 ],
 "layout": "vertical",
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "verticalAlign": "middle",
 "top": "25%",
 "propagateClick": true,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "bottom": "25%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-Level 2-6"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingTop": 0
},
{
 "id": "Image_F1E80E1A_E04A_EB06_41E0_51232AE349F6",
 "left": "0%",
 "paddingLeft": 0,
 "maxWidth": 368,
 "minHeight": 1,
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_F1E80E1A_E04A_EB06_41E0_51232AE349F6.png",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "top": "1.42%",
 "propagateClick": false,
 "height": "24.096%",
 "paddingRight": 0,
 "class": "Image",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "Image5083"
 },
 "maxHeight": 180,
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "left": "0%",
 "shadowSpread": 1,
 "paddingLeft": 10,
 "minHeight": 1,
 "width": "73.064%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "top": "-19.32%",
 "iconWidth": 32,
 "propagateClick": true,
 "pressedLabel": "Lorem Ipsum",
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 3"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "minHeight": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "propagateClick": false,
 "height": "100%",
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.96vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.49vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.49vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.32vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.32vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.45vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.32vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.32vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1",
 "paddingTop": 0
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "minHeight": 1,
 "shadowSpread": 1,
 "width": 180,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "minWidth": 1,
 "borderRadius": 50,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "paddingRight": 0,
 "class": "Button",
 "height": 50,
 "fontSize": "2.39vh",
 "label": "LOREM IPSUM",
 "backgroundColorRatios": [
  0
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "center",
 "iconBeforeLabel": true,
 "shadow": false,
 "fontStyle": "italic",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ]
},
{
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "minHeight": 1,
 "paddingLeft": 0,
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "propagateClick": false,
 "height": "46%",
 "paddingRight": 0,
 "class": "HTMLText",
 "borderSize": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.96vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.49vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.49vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "scrollBarOpacity": 0,
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1",
 "paddingTop": 0
},
{
 "layout": "horizontal",
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": "75%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "- content"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "layout": "absolute",
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 50,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Ground Floor >",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 3); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button Tour Info"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 50,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "First Floor >",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 23,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button Panorama List"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "pressedLabel": "Inserdt Text",
 "height": 50,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Sports Areas >",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button Location"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "visible": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingTop": 0
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 50,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Hostels >",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button Floorplan"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "visible": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "visible": false,
 "paddingTop": 0
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 50,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Educational Avenues >",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button Photoalbum"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "visible": false,
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 50,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Second Floor >",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button Contact"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "layout": "horizontal",
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "minHeight": 1,
 "width": 40,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "contentOpaque": false,
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 2,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "blue line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "minHeight": 1,
 "paddingLeft": 0,
 "width": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "propagateClick": true,
 "height": 78,
 "paddingRight": 0,
 "class": "HTMLText",
 "borderSize": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText47602"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "visible": false,
 "paddingTop": 0
},
{
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "layout": "horizontal",
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "height": 56,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "visible",
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 7,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-Container Icons 1"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 0
},
{
 "children": [
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "layout": "horizontal",
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "height": 44,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "visible",
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 7,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-Container Icons 2"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 0
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "minHeight": 1,
 "shadowSpread": 1,
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "paddingLeft": 5,
 "width": "100%",
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 30,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 30,
 "propagateClick": true,
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "height": 50,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "BACK",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button <BACK"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverFontFamily": "Oswald",
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "layout": "absolute",
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "height": 8,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 0
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverShadow": false,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Medical Ward",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 15)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 1"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Emergency Ward",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 1)",
 "fontStyle": "italic",
 "gap": 23,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 2"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "pressedLabel": "Reception",
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Physiotherapy Department",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 18)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 3"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Aesthetics Clinic",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 4)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 4"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Dental Clinic",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 16)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 5"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Opthamology Department",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 20)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 6"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_C7F917C4_E04F_9902_41E1_65134BB31E3C",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Dermatology Departments",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 5)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 6"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "minHeight": 1,
 "shadowSpread": 1,
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "paddingLeft": 5,
 "width": "100%",
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 30,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 30,
 "propagateClick": true,
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "height": 50,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "BACK",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button <BACK"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverFontFamily": "Oswald",
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "layout": "absolute",
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "height": 8,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 0
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverShadow": false,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Peads Ward",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 8)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 1"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Surgical Ward",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 7)",
 "fontStyle": "italic",
 "gap": 23,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 2"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "pressedLabel": "Lorem Ipsum",
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Minor Operation Theatre",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 23)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 3"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Paeds ICU",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 4"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Surgical ICU",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 13)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 5"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "minHeight": 1,
 "shadowSpread": 1,
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "paddingLeft": 5,
 "width": "100%",
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 30,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 30,
 "propagateClick": true,
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "height": 50,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "BACK",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button <BACK"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverFontFamily": "Oswald",
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "layout": "absolute",
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "height": 8,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 0
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverShadow": false,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Labour Room",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 10)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 1"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "NICU",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 12)",
 "fontStyle": "italic",
 "gap": 23,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 2"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "pressedLabel": "Lorem Ipsum",
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Operation Theatre",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.mainPlayList.set('selectedIndex', 26)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 3"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "minHeight": 1,
 "shadowSpread": 1,
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "paddingLeft": 5,
 "width": "100%",
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 30,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 30,
 "propagateClick": true,
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "height": 50,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "BACK",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button <BACK"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverFontFamily": "Oswald",
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "layout": "absolute",
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "height": 8,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 0
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverShadow": false,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Ground",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 1"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Mess Area",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "fontStyle": "italic",
 "gap": 23,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 2"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "pressedLabel": "Lorem Ipsum",
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Bedroom",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 3"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "minHeight": 1,
 "shadowSpread": 1,
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "paddingLeft": 5,
 "width": "100%",
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 30,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 30,
 "propagateClick": true,
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "height": 50,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "BACK",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button <BACK"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverFontFamily": "Oswald",
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "layout": "absolute",
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "height": 8,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 0
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverShadow": false,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Library",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 1"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Lecture Hall",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "fontStyle": "italic",
 "gap": 23,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 2"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "pressedLabel": "Lorem Ipsum",
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Court Room",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 3"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Computer Lab",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 4"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "minHeight": 1,
 "shadowSpread": 1,
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "paddingLeft": 5,
 "width": "100%",
 "rollOverBackgroundOpacity": 0.8,
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 30,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 30,
 "propagateClick": true,
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "height": 50,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "BACK",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "gap": 5,
 "rollOverFontSize": 18,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button <BACK"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverFontFamily": "Oswald",
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "layout": "absolute",
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "minHeight": 1,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0.5,
 "width": "100%",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "top",
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingRight": 0,
 "class": "Container",
 "height": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "scroll",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
},
{
 "layout": "absolute",
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "height": 8,
 "paddingRight": 0,
 "class": "Container",
 "overflow": "scroll",
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "line separator"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "paddingTop": 0
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "rollOverShadowBlurRadius": 18,
 "paddingBottom": 0,
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverShadow": false,
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Main Aerial View",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "fontStyle": "italic",
 "gap": 5,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 1"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Football Field",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "fontStyle": "italic",
 "gap": 23,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 2"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "fontFamily": "Oswald",
 "layout": "horizontal",
 "id": "Button_C4D76E2D_E05A_EB02_41E0_44EF18C2D008",
 "minHeight": 1,
 "shadowSpread": 1,
 "paddingLeft": 10,
 "width": "100%",
 "paddingBottom": 0,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "cursor": "hand",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "minWidth": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "iconWidth": 32,
 "propagateClick": true,
 "height": 36,
 "paddingRight": 0,
 "class": "Button",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "label": "Backyard",
 "backgroundColorRatios": [
  0,
  1
 ],
 "mode": "push",
 "borderSize": 0,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "left",
 "iconBeforeLabel": true,
 "shadow": false,
 "fontStyle": "italic",
 "gap": 23,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "data": {
  "name": "Button text 2"
 },
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "rollOverBackgroundOpacity": 0.8,
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "minHeight": 1,
 "paddingLeft": 0,
 "maxWidth": 200,
 "width": "25%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "top",
 "propagateClick": false,
 "height": "100%",
 "paddingRight": 0,
 "class": "Image",
 "borderSize": 0,
 "horizontalAlign": "left",
 "shadow": false,
 "data": {
  "name": "agent photo"
 },
 "maxHeight": 200,
 "paddingTop": 0,
 "scaleMode": "fit_inside"
},
{
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "minHeight": 1,
 "paddingLeft": 10,
 "width": "75%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "propagateClick": false,
 "height": "100%",
 "paddingRight": 10,
 "class": "HTMLText",
 "borderSize": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.32vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.32vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.45vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.45vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.45vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.45vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1",
 "paddingTop": 0
},
{
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "minHeight": 1,
 "width": 44,
 "paddingLeft": 0,
 "maxWidth": 101,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "height": 44,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "click": "this.openLink('https://rlkumc.edu.pk/hlth', '_blank')",
 "mode": "push",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Info"
 },
 "paddingTop": 0,
 "maxHeight": 101
},
{
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "minHeight": 1,
 "width": 44,
 "paddingLeft": 0,
 "maxWidth": 101,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "height": 44,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "mode": "push",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingTop": 0,
 "maxHeight": 101
},
{
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "minHeight": 1,
 "width": 44,
 "paddingLeft": 0,
 "maxWidth": 101,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "height": 44,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "click": "this.openLink('https://maps.app.goo.gl/LJPGXsXKHHXHCvUCA', '_blank')",
 "mode": "push",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "maxHeight": 101
},
{
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "minHeight": 1,
 "width": 51.6,
 "paddingLeft": 0,
 "maxWidth": 58,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "minWidth": 1,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "height": 45.6,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "click": "this.openLink('https://web.facebook.com/HLTHOfficia', '_blank')",
 "mode": "push",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton FB"
 },
 "paddingTop": 0,
 "maxHeight": 58
},
{
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "minHeight": 1,
 "width": 50,
 "paddingLeft": 0,
 "maxWidth": 101,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "borderRadius": 0,
 "minWidth": 1,
 "verticalAlign": "middle",
 "propagateClick": false,
 "height": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "mode": "push",
 "borderSize": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "data": {
  "name": "IconButton --"
 },
 "visible": false,
 "maxHeight": 101,
 "paddingTop": 0
}],
 "layout": "absolute",
 "id": "rootPlayer",
 "minHeight": 20,
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "children": [
  "this.MainViewer",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.Image_C531E783_E036_B906_41C2_473921148D5F",
  "this.Label_C559C0ED_E037_F703_41C7_659205F9FE23"
 ],
 "paddingBottom": 0,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": "100%",
 "scrollBarColor": "#000000",
 "scripts": {
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getKey": function(key){  return window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "minWidth": 20,
 "downloadEnabled": false,
 "borderRadius": 0,
 "verticalAlign": "top",
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "propagateClick": true,
 "paddingRight": 0,
 "class": "Player",
 "height": "100%",
 "desktopMipmappingEnabled": false,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarWidth": 10,
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Player468"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "mobileMipmappingEnabled": false
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
