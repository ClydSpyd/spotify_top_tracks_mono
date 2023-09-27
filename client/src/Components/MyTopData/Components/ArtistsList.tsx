import React from 'react'
import { Artist, Grid, SectionContainer, SectionHeader, SectionTitle } from '../MyTopData.styles'
import { AiFillPlayCircle } from 'react-icons/ai'

type Props = {
  artists: ArtistData[]
}

const ArtistsList = ({ artists }: Props) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Your Top Artists</SectionTitle>
      </SectionHeader>
      <Grid>
        {artists.slice(0, 20).map((artist) => (
          <Artist>
            <div>
              <img src={artist.images[0].url} alt={artist.name} />
              <AiFillPlayCircle />
            </div>
            <h3>{artist.name}</h3>
          </Artist>
        ))}
      </Grid>
    </SectionContainer>
  );
}

export default ArtistsList