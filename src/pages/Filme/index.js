import React, {useState, useEffect} from 'react';

import {
  ScrollView,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Title, Button, Paragraph, Caption, List} from 'react-native-paper';
import styles from './styles';
import api from '../../services/api';
import {SinglePickerMaterialDialog} from 'react-native-material-dialog';

import ButtonVertical from '../../components/ButtonVertical';
import Secao from '../../components/Secao';
import Episodio from '../../components/Episodios';

const Filme = ({route, navigation}) => {
  const {filme, secao} = route.params;
  const [visible, setVisible] = useState(false);
  const [temporada, setTemporada] = useState({value: filme?.temporadas[0]?._id, label: filme?.temporadas[0]?.titulo,});
  const [episodios, setEpisodios] = useState([])
  
  const getEpisodios = async (temporada_id) => {
    try{
      const response = await api.get(`/episodios/temporada/${temporada_id}`);
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }

      setEpisodios(res.episodios);

    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    if (filme.type == 'serie') {
      getEpisodios(temporada.value);
    }
  }, []);

  return (
    <>
      <SinglePickerMaterialDialog
        title={`${filme.title} - Temporadas`}
        items={filme?.temporadas.map(temporada => ({value: temporada._id, label: temporada.titulo}))}
        visible={visible}
        selectedItem={temporada}
        onOk={(result) => {
          getEpisodios(result.selectedItem.value)
          setVisible(false);
          setTemporada(result.selectedItem);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      />
      
      <ScrollView style={styles.container}>
        <ImageBackground
          style={styles.hero}
          source={{uri: filme.cover}}
        >
          <TouchableOpacity style={styles.buttonBack} 
          onPress={() => {
            navigation.goBack();
          }}
          >
            <Icon name="arrow-left" color="#fff" size={25} />
          </TouchableOpacity>
        </ ImageBackground>
        <View style={styles.containerPadding}>
          <Title>{filme.title}</Title>
          <Button
            style={styles.buttonPlay}
            icon="play"
            mode="contained"
            color="#fff"
            uppercase={false}>
            Assistir
          </Button>
          <Paragraph> {filme.description} </Paragraph>
          <Caption style={styles.captionInfos}>
            Elenco:{' '}
            <Caption style={styles.captionWhite}>
              {filme.cast.join(', ')}
            </Caption>{' '}
             Generos:
            <Caption style={styles.captionWhite}>
              {' '}
              {filme.genres.join(', ')} {' '}
            </Caption>
            Cenas e Momentos{' '}
            <Caption style={styles.captionWhite}>{filme.scenes_moments.join(', ')}</Caption>
          </Caption>

          <View style={styles.menu}>
            <ButtonVertical icon="plus" text="Minha Lista" />
            <ButtonVertical icon="thumb-up" text="Classifique" />
            <ButtonVertical icon="send" text="Compartilhe" />
            <ButtonVertical icon="download" text="Baixar" />
          </View>
          {filme.type == 'serie' && (
            <>
              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={styles.buttonTemporada}>
                <Text style={styles.temporadaName}>{temporada.label}</Text>
                <Icon name="chevron-down" color="#fff" size={20} />
              </TouchableOpacity>
              <FlatList
                data={episodios}
                renderItem={({item, index}) => <Episodio episodio={item} key={index} />}
              />
            </>
          )}
        </View>
        {filme.type == 'movie' && <Secao secao={secao} hasTopBorder />}
      </ScrollView>
    </>
  );
};

export default Filme;
