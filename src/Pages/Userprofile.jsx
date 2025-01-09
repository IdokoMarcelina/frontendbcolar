
import './Profile.css';

const UserProfile = () => {
  return (
    <div className="profile-container">

      <div className="profile-content">
        <h2>Edit Profile</h2>
        <form className="edit-profile-form">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Awojobi" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Muibat" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="tmua91@gmail.com" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" placeholder="08134963534" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" placeholder="123 Street Name" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="City" />
          </div>
          <div className="form-group">
            <label>State</label>
            <input type="text" placeholder="State" />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input type="text" placeholder="Country" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="********" />
          </div>
          <button className="save-button" type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
