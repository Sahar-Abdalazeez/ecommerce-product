import { useState } from 'react';
import styled from 'styled-components';

const MainGalleryContainer = styled.div`
  display: flex;
  flex:1;
  width: 50%;
  height: 100%;
  flex-direction: column;
`;
const MainImage = styled.img`
  height: 500px;
  width:90%;
  min-width: 300px;
  border-width: 2px;
  border-radius: 10px;
  margin-bottom: 40px;
`;

const ImageOptions = styled.div`
display: flex;
flex-direction:row;
height:100px;
width: 90%;
min-width: 300px;
justify-content:space-between ;
align-items: center;
`;

const OptionContainer = styled.div`
  width: 80px;
  height:80px;
  border:${props => props.isSelected ? `solid 2px  hsl(26, 100%, 55%)` : `solid 2px transparnt`};
  border-radius: 10px;
  overflow: hidden;
  margin-right: 5px;
`;

const Option = styled.button`
  background-color: transparent;
`;

const OptionImage = styled.img`
 width: 80px;
  height:80px;
`;

export const Gallery = ({ optionImages }) => {
  const [mainSource, setMainSource] = useState(optionImages[0]);
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <MainGalleryContainer >
      <MainImage src={mainSource} />

      <ImageOptions>

        {optionImages?.map((item, index) => {
          return (
            <OptionContainer isSelected={selectedIndex === index} >
              <Option onClick={() => setSelectedIndex(index)} >

                <OptionImage
                  src={item}
                  isSelected={index === selectedIndex}
                  onClick={(e) => setMainSource(e.target.src)}
                />

              </Option>
            </OptionContainer>

          )
        })}
      </ImageOptions>
    </MainGalleryContainer>
  );
}
