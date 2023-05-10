import profile from '../../src/static/images/avatar.png';
const UserCard = ({firstName, lastName, interestedInGender, isMatched, createdAt}) => {
    return (
        <div className="border w-full">
            <h2 className="text-xl">{firstName} {lastName}</h2>
            <p>Hi I'm {firstName} and I'm interested in meeting {interestedInGender === "M" ? "men" : "women"}</p>
            
            <img className="object-cover w-full rounded-full py-12 px-12" src={profile} />
            <div className='flex flex-col items-center'>
                <div>
                <button className="text-4xl bg-red-500 rounded-full px-5 py-4 mr-6">N</button>
                <button className="text-4xl bg-red-500 rounded-full px-6 py-4 ml-6"> Y</button>
                </div>
                </div>
        </div>
    )
}
export default UserCard;