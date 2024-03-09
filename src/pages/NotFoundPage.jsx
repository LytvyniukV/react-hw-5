import { Link } from 'react-router-dom';
import BackLinkBtn from '../components/BackLinkBtn/BackLinkBtn';
export default function NotFoundPage() {
  return (
    <div>
      Sorry, invalid page{' '}
      <Link to="/">
        <BackLinkBtn />
      </Link>
    </div>
  );
}
