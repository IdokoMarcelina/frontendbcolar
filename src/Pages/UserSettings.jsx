
const UserSettings = () => {
    return (
      <div>
        <h2>User Settings</h2>
        <p>Here you can update your account preferences and settings.</p>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <div>
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default UserSettings;
  