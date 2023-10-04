import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import './InputUpload.scss';

type InputProps = {
  classes?: string;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  urlImage: string;
  handleClose: () => void;
};

const InputUpload = ({
  urlImage,
  handleFileChange,
  classes,
  handleClose,
}: InputProps) => {
  

  return (
    <div className={`${classes ? classes : ''} upload-image-wrapper`}>
      <input
        accept="image/*"
        id="image-upload"
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <label htmlFor="image-upload">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          Select File
        </Button>
      </label>
      <div className="mt-4 upload-image-wrapper__item">
        <div
          onClick={handleClose}
          className="upload-image-wrapper__item__close"
        >
          <CloseIcon />
        </div>
        <img
          className='upload-image-wrapper__item__image'
          src={urlImage !== '' ? urlImage : 'no_image.jpg'}
          alt="Selected"
          width="150"
          height="150"
        ></img>
      </div>
    </div>
  );
};

export default InputUpload;
