import AuthenticationPage from "./authentication/page";
import MusicPage from "./home/page";
const user = 3;

export default function IndexPage() {
  if (user === undefined) {
    return <AuthenticationPage />;
  } else {
    return <MusicPage />;
  }
}
