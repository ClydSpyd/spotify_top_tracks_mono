import { handleAuthRedirect } from "../../utilities/handleAuthRedirect"

type Props = {}

const Landing = (props: Props) => {


  return (
    <div>
      <button onClick={handleAuthRedirect}>CLICK ME</button>
    </div>
  )
}

export default Landing