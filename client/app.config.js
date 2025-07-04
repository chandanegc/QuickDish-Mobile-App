require('dotenv').config();
module.exports={
  "expo": {
    "name": "Quick Dish",
    "slug": "quick-dish",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/quick-dish.png",
    "scheme": "client",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/quick-dish.png",
        "backgroundColor": "#ffffff"
      },
       "config": {
        "googleMaps": {
          "apiKey": process.env.GOOGLE_MAPS_API_KEY
        }
      },
      "edgeToEdgeEnabled": true,
      "package": "com.chandanegc.quickdish"
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/quick-dish.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/quick-dish.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "router": {},
      "eas": {
        "projectId": "11647955-7c99-48a5-b5fb-627ab7f3ef8f"
      }
    }
  }
}
