import {Dimensions} from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    HeaderRatio: 0.15, // Proporção do painel superior da tela
    difficultLevel: 0.1,
    getColumnsAmount(){
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount(){
        const heigth = Dimensions.get('window').height
        const boardHeigth = heigth * (1 - this.HeaderRatio)
        return Math.floor(boardHeigth / this.blockSize)
    },
}
export default params;