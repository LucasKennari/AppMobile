import {Image, Text, View} from 'react-native';
import styles from './style';
import {CharacterObj} from '../../../src/@types';

interface CardProps {
  cardObj: CharacterObj;
}

export default function Card({cardObj}: CardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image src={cardObj.image} style={styles.photoIcon} />
        <Text style={styles.cardTitle}>{cardObj.name}</Text>
        <Text style={styles.cardType}>{cardObj.species}</Text>

        <View style={styles.locationContainer}>
          <Text style={styles.span}>You can find me in</Text>
          <Text style={styles.location}>{cardObj.location.name}</Text>
        </View>
      </View>
    </View>
  );
}
