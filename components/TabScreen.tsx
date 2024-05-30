




import React, {useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import TabButtons, {TabButtonType} from './TabButtons';
import All from './app-profile/All';
import Photos from './app-profile/Photos';
import Gifs from './app-profile/Gifs';

export enum CustomTab {
    Tab1,
    Tab2,
    Tab3,
}

const TabScreen = () => {


    const [selectedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab1);

    const buttons: TabButtonType[] = [
        {title: "All"}, 
        {title: "Photos"},
        {title: "GIFs"},
    ];

   return (


    <>

        <TabButtons
            buttons={buttons}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
        />

        <View style={styles.tabBtn}>
            { 
                selectedTab === CustomTab.Tab1 ?  (<All/> ) : selectedTab === CustomTab.Tab2 ?  (<Photos/>)  :  (<Gifs/>) 
            }
        </View>
    </>



  );

};

export default TabScreen;


const styles = StyleSheet.create({

    tabBtn: {
        borderStyle: "solid",
        borderColor: "transparent",
        borderWidth: 2,
        flex: 1, 
        marginTop: 20,
    }
});