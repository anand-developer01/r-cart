
interface AppProp {
  sampleUser : string
}

const SampleTypescript : React.FC<AppProp> = ({sampleUser}) => {
  return (
    <div className="App">
      {sampleUser}
    </div>
  );
}

export default SampleTypescript;
