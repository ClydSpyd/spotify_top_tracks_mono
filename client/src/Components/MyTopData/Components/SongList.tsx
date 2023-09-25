import {
  List,
  SectionContainer,
  SectionTitle,
  Song,
} from "../MyTopData.styles";

interface Props {
  songs: SongData[];
}

function SongList({ songs }: Props) {
  const mapItems = (items: SongData[]) => {
    return items.map((item: SongData) => {
      const artists = item.artists.reduce(
        (output: string, current: ArtistData) =>
          output === ""
            ? (output += current.name)
            : (output += `, ${current.name}`),
        ""
      );
      return (
        <Song key={item.id} className={"item"}>
          <img src={item.album.images[0].url} alt={item.name} />
          <div className="text">
            <h3>{item.name}</h3>
            <p>{artists}</p>
          </div>
        </Song>
      );
    });
  };

  return (
    <SectionContainer>
      <SectionTitle>Your Top Songs</SectionTitle>
      <List>{mapItems(songs)}</List>
    </SectionContainer>
  );
}

export default SongList;

// const getSongData = async () => {
//   const {
//     data: { items },
//   } = await axios.get(`${process.env.REACT_APP_API_URL}/data/myTopSongs`);
//   setSpotifyData((prev) => ({ ...prev, songs: items }));
//   console.log(items);
// };

// const getArtistData = async () => {
//   const {
//     data: { items },
//   } = await axios.get(`${process.env.REACT_APP_API_URL}/data/myTopArtists`);
//   setSpotifyData((prev) => ({ ...prev, artists: items }));
//   console.log(items);
// };
