import profile from '../../src/static/images/avatar.png';
import { addMatch, removeMatch } from '../lib/matchesApi';

const UserCard = ({currentUser, id, firstName, lastName, interestedInGender, isMatched, createdAt}) => {

    function handleAddMatch() {
        addMatch(currentUser.id, id);
        addMatch(id, currentUser.id);
        // some code to change the style of the button(s)
    }

    function handleRemoveMatch() {
        removeMatch(currentUser.id, id);
        removeMatch(id, currentUser.id);
        // some code to change the style of the button(s)
    }

    return (
        <div className="border w-full">
            <h2 className="text-xl">Name</h2>
            <p>Bio.......</p>
            
            <img className="object-cover w-full rounded-full" src={profile} />
            <div>
                <button className="border-2 border-black rounded-full px-2 " onClick={handleRemoveMatch}>No</button>
                <button className="border-2 border-black rounded-full px-2 " onClick={handleAddMatch}> Yes</button>
            </div>
        </div>
    )
}
export default UserCard;