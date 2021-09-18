import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Checkbox from '../form-fields/checkbox';
import GenericForm from '../form-fields/generic-form';
import { changeSettings, CHANGE_SETTINGS, readAll, READ_ALL } from '../../redux/modules/settings';
import { errorPropTypes } from '../../util/proptype-utils';
import { getComponentTranslator } from '../../util/i18n-util';
import { Translate } from 'react-i18nify';

const translate = getComponentTranslator('settings');

const form = reduxForm({
  form: 'settings'
});

class Settings extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    errors: errorPropTypes,
    message: PropTypes.string,
    loading: PropTypes.bool
  };

  static formSpec = [
    { id: 'registerOn', name: 'registerOn', label: translate('registerOn'), type: 'checkbox', component: Checkbox }
  ];

  handleFormSubmit = formProps => this.props.changeSettings(formProps, this.props.settings);

  componentDidMount = () => this.props.readAll();

  render() {
    const { handleSubmit, errors, message, loading } = this.props;
    return (
      <div className={`flex-box ${loading ? 'is-loading' : ''}`}>
        <h1><Translate value="settings.title" /></h1>
        <GenericForm
          onSubmit={handleSubmit(this.handleFormSubmit)}
          errors={errors}
          message={message}
          formSpec={Settings.formSpec}
          submitText={translate('submit')}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => ({
  errors: settings.errors[CHANGE_SETTINGS].concat(settings.errors[READ_ALL]),
  message: settings.messages[CHANGE_SETTINGS].concat(settings.messages[READ_ALL]),
  loading: settings.loading[CHANGE_SETTINGS] || settings.loading[READ_ALL],
  settings: settings.settings,
  initialValues: settings.settings
});

export default connect(mapStateToProps, { changeSettings, readAll })(form(Settings));
