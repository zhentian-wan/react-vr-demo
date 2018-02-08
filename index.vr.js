import React from 'react';
import {
  AppRegistry,
  Animated,
  asset,
  Pano,
  Box,
  Text,
  View,
  Image,
  Model,
  Sphere,
  PointLight,
  AmbientLight,
  DirectionalLight,
} from 'react-vr';

const AnimatedBox = Animated.createAnimatedComponent(Box);

export default class app extends React.Component {
  constructor() {
    super();
    this.state = {
      fadeIn: new Animated.Value(0),
      springValue: new Animated.Value(-1),
      rotation: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.rotation,
      {
        duration: 10000,
        toValue: 930
      }
    ).start();
    Animated.sequence([
      Animated.spring(
        this.state.springValue,
        {
          toValue: 0,
          duration: 3000,
          tension: 1,
          friction: 2
        }
      ),
      Animated.delay(200),
      Animated.timing(
        this.state.fadeIn,
        {
          duration: 1500,
          toValue: 1,
          easing: (x) => x 
        }
      )
    ]).start();
  }

  render() {
    return (
      <View>
        <View>
          <AmbientLight intensity={0.5}/>
          <AnimatedBox
            lit
            dimWidth={2}
            dimDepth={2}
            dimHeight={1}
            style={
              {
                color: 'orange',
                transform: [
                  {translate: [0,2,-3]},
                  {rotateY: this.state.rotation},
                  {rotateX: -40}
                ]
              }
            }
          ></AnimatedBox>
        </View>
        <Animated.Image 
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [
              {translateZ: -1},
              {translateY: this.state.springValue}
            ],
            height: 0.5,
            width: 0.5,
            backgroundColor: '#335'
          }}
          source={asset('4.jpeg')}
        >
          <Animated.Text 
            style={{
              opacity: this.state.fadeIn,
              color: 'green',
              fontSize: 0.10,
              textAlign: 'center'
            }}
          >Grit</Animated.Text>
        </Animated.Image>
        {/*<DirectionalLight
          intensity={5} 
          style={{
            transform: [{translateZ: -1}]
          }}
        />
        <Model
          source={{
            obj: asset('girl.obj')
          }}
          style={{
            color: 'white',
            transform: [{translate: [0, -10, -35]}]
          }}
          lit
        />
        <Sphere
          style={{
            color: 'lightblue',
            transform: [{translateZ: -2}]
          }}
          lit
          texture={asset('earth.jpg')}
          heightSegments={20}
          widthSegments={20}
        ></Sphere>*/}

        { /*<Pano 
          style={{
            transform: [{rotateY: "0deg"}]
          }}
          onLoad={() => {console.log('Image is loaded successfully')}}
          onLoadEnd={() => {console.log('Load end')}}
          source={asset('chess-world.jpg')}
          />
          <View
            style={{
              width: 2,
              height: 2.5,
              backgroundColor: 'white',
              layoutOrigin: [0.5, 0.5],
              transform: [{translate: [0,0,-3]}],
              justifyContent: 'space-between'
            }}
          >
            <Image source={asset('images.jpeg')} style={{height: 1.2}}/> 
            <Text
              style={{
                color: 'lightblue',
                fontSize: 0.16,
                textAlign: 'center'
              }}>
              Beautify nature
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Image 
                source={asset('1.jpeg')}
                style={{width: 0.5, height: 0.5}}
              />
              <Image 
                source={asset('2.jpeg')}
                style={{width: 0.5, height: 0.5}}
              />
              <Image 
                source={asset('3.jpeg')}
                style={{width: 0.5, height: 0.5}}
              />
              <Image 
                source={asset('4.jpeg')}
                style={{width: 0.5, height: 0.5}}
              />
            </View>
            </View> */}
      </View>
    );
  }
};

AppRegistry.registerComponent('app', () => app);
