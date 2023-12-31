import * as ScreenOrientation from 'expo-screen-orientation';
import { useState,useEffect } from 'react';

export default function useOrientation(){
    const [screenOrientation,setScreenOrientation]=useState(
        ScreenOrientation.Orientation.PORTRAIT_UP
    )
    
    useEffect(()=>{

        const orientationChange=(currentOrientation)=>{
            const orientationValue=currentOrientation.orientationInfo.orientation;
            setScreenOrientation(orientationValue);
        }

        const initScreenOrientation=async()=>{
            const currentOrientation=await ScreenOrientation.getOrientationAsync();
            setScreenOrientation(currentOrientation);
        }

        const screenOrientationListener=ScreenOrientation.addOrientationChangeListener(orientationChange);

        initScreenOrientation();

        return()=>{
            ScreenOrientation.removeOrientationChangeListener(screenOrientationListener);
        };

        

    },[]);

    return screenOrientation === 3 || screenOrientation === 4 ? 'LANDSCAPE' :'PORTRAIT';
}
