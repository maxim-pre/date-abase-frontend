import profile from '../../src/static/images/avatar.png';
const UserCard = ({firstName, lastName, interestedInGender, isMatched, createdAt}) => {
    return (
        <div className="border w-full">
            <h2 className="text-xl">Name</h2>
            <p>Bio.......</p>
            
            <img className="object-cover w-full rounded-full" src={profile} />
            <div>
                <button className="border-2 border-black rounded-full px-2 ">No</button>
                <button className="border-2 border-black rounded-full px-2 "> Yes</button>
            </div>
        </div>
    )
}
export default UserCard;