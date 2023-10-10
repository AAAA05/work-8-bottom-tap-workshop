import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import globalStyles from "./global-styles";

export default function TabAbout({navigation}){
    return(
        <View style={styles.container}>

            <Text style={{fontSize:20, fontWeight: 'bold'}}>Polar Bear</Text>

            <ScrollView contentContainerStyle={styles.scrollViewContent} 
            style={{alignItems: 'center'}} horizontal={false}>

              <Text style={styles.text}>

                The polar bear (Ursus maritimus) is a large bear native to the Arctic and surrounding areas. It is closely related to the brown bear, and the two species can interbreed. The polar bear is the largest extant species of bear and land carnivore, with adult males weighing 300–800 kg (700–1,800 lb). The species is sexually dimorphic, as adult females are much smaller. The polar bear is white- or yellowish-furred with black skin and a thick layer of fat. It is more slender than the brown bear, with a narrower skull, longer neck and lower shoulder hump. Its teeth are sharper and more adapted to cutting meat. The paws are large and allow the bear to walk on ice and paddle in the water.

Polar bears are both terrestrial and pagophilic (ice-living) and are considered to be marine mammals due to their dependence on marine ecosystems. They prefer the annual sea ice but live on land when the ice melts in the summer. They are mostly carnivorous and specialized for preying on seals, particularly ringed seals. Such prey is typically taken by ambush; the bear may stalk its prey on the ice or in the water, but also will stay at a breathing hole or ice edge to wait for prey to swim by. The bear primarily feeds on the seal's energy-rich blubber. Other prey include walruses, beluga whales and some terrestrial animals. Polar bears are usually solitary but can be found in groups when on land. During the breeding season, male bears guard females and defend them from rivals. Mothers give birth to cubs in maternity dens during the winter. Young stay with their mother for up to two and a half years.

The polar bear is considered to be a vulnerable species by the International Union for Conservation of Nature (IUCN) with an estimated total population of 22,000 to 31,000 individuals. Its biggest threats are climate change, pollution and energy development. Climate change has caused a decline in sea ice, giving the polar bear less access to its favoured prey and increasing the risk of malnutrition and starvation. Less sea ice also means that the bears must spend more time on land, increasing conflicts with people. Polar bears have been hunted, both by native and non-native peoples, for their coats, meat and other items. They have been kept in captivity in zoos and circuses and are prevalent in art, folklore, religion and modern culture.

              </Text>
            
            </ScrollView>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    scrollViewContent: {
        margin: 5,
        padding: 20,
        backgroundColor: 'gray',
    },
    text: {
        fontSize: 16,
        fontStyle: 'italic',
        color: 'white',
    },
    imgicon: {
      width: 150,
      height: 150,
    }
})