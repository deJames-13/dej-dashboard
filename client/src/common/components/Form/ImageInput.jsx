import PropTypes from 'prop-types';

function ImageInput({ label, alt, refer, meta, formik, ...inputProps }) {
  return (
    <label className="w-full max-w-xs form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        ref={refer}
        className={`w-full file-input file-input-bordered ${
          meta?.touched && meta?.error ? 'file-input-error' : 'file-input-primary'
        }`}
        {...inputProps}
        type="file"
        onChange={(e) => {
          formik.setFieldValue(
            inputProps.name,
            inputProps?.multiple ? Array.from(e.currentTarget.files) : e.currentTarget.files[0]
          );
        }}
      />
      <div className="label">
        <span className="label-text-alt">{alt}</span>
        <span className="label-text-alt"></span>
      </div>
    </label>
  );
}

ImageInput.propTypes = {
  label: PropTypes.string,
  alt: PropTypes.string,
  refer: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  meta: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  formik: PropTypes.object,
};

export default ImageInput;

