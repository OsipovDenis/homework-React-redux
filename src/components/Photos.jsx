import React from 'react';
import {connect} from 'react-redux';
import Photo from './photo';

class Photos extends React.Component {
	componentDidMount() {
		let body = document.querySelector('body');
		body.style.background = '#ffffff';

		let { colorName } = this.props.color;
		let  { onChangePhotos } = this.props;

        fetch(`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&extras=url_l,url_q&api_key=0285b7f006da5d9651ae5d1c68b8e577&per_page=10&tags=${colorName}`)
		.then((response) => {
            return response.text();
		})
		.then((data) => {

            let open = data.indexOf('('),
            	closed = data.lastIndexOf(')');

            	data = data.substring(open+1, closed);

            data = JSON.parse(data);

            // console.log(data.photos.photo);
            onChangePhotos(data.photos.photo);  
        })
        .catch((err) => {
            console.log(err);
        });
	}

	render(){
		
		let { photos } = this.props;
		
		if ( photos.length === 0 ){
			return (
				<div className="photosNotFound">Фотографии не найдены!</div>
			);
		}

		return (
			<div className='photos'>
					{
						photos.map( (item) => {
							return <Photo src = { item.url_q } />
						})
					}
			</div>
		);
	}
		
}
// Action
const setPhotos = function(photos){
	return {
		type: 'SET_PHOTOS',
		photos: photos
	}
}

function mapDispatchToProps(dispatch){
	return {
		onChangePhotos: (photos) => {
			dispatch( setPhotos(photos) );
		}
	}
}

function mapStateToProps (store) {
  return {
    color: store.color,
    photos: store.photos.photos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);