import profile from '../../src/static/images/avatar.png';
import { addMatch, removeMatch } from '../lib/matchesApi';

const UserCard = ({currentUser, otherUser, id, firstName, lastName, interestedInGender, isMatched, createdAt, bio}) => {

    function handleAddMatch() {
        addMatch(currentUser, otherUser);
        addMatch(otherUser, currentUser);
        // some code to change the style of the button(s)
    }

    function handleRemoveMatch() {
        removeMatch(currentUser, otherUser);
        removeMatch(otherUser, currentUser);
        // some code to change the style of the button(s)
    }

    const joinedAt  = new Date(createdAt).toLocaleDateString();  

    const interestedInGenders = interestedInGender.map( (gender) => {
        switch (gender) {
            case "M":
                return "men"
                break;
            case "F":
                return "women"
                break;
            case "O":
                return "people with other gender indentities"
                break;
        }
    }).join(" and ");
  
        return (

        <div className="border w-100 mx-4 my-4 px-4 py-4 bg-[#e8e8e890]">
            <h2 className="text-3xl text-center py-4">{firstName} {lastName}</h2>
            <p className='text-center px-6'>Hi I'm {firstName} and I'm interested in meeting {interestedInGenders}</p>

           
            <img className="object-cover w-full rounded-full py-12 px-12" src={profile} />
            <p className='text-center pb-8'>I joined DaterBase on {joinedAt}</p>
            <div className='flex flex-col items-center'>
                <div>

                {isMatched && <button className="text-4xl bg-red-500 text-white rounded-full px-5 py-4 mr-6 focus:bg-green-500 focus:text-black hover:shadow-2xl hover:bg-yellow-400 hover:text-black" onClick={handleRemoveMatch}>N</button>}
                {!isMatched && <button className="text-4xl bg-green-500 text-white rounded-full px-6 py-4 ml-6 focus:bg-green-500 focus:text-black hover:shadow-2xl hover:bg-yellow-400 hover:text-black" onClick={handleAddMatch}> Y</button>}
                </div>
                </div>
        </div>
    )
}
export default UserCard;