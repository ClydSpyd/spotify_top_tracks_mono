import React from 'react'
import { Artist, Grid, SectionContainer, SectionTitle } from '../MyTopData.styles'

type Props = {
  artists: ArtistData[]
}

const ArtistsList = ({ artists }: Props) => {
  return (
    <SectionContainer>
      <SectionTitle>Your Top Artists</SectionTitle>
      <Grid>
        {artists.slice(0, 20).map((artist) => (
          <Artist>
            <img src={artist.images[0].url} alt={artist.name} />
            <h3>{artist.name}</h3>
          </Artist>
        ))}
      </Grid>
    </SectionContainer>
  );
}

export default ArtistsList