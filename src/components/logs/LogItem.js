import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog }) => {

  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log Deleted Successfully!' })
  }

  return (
    <li className='collection-item'>
        <div>
            <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'} `}>
              {log.message}
            </a>
            <br />
            <span>
              ID # {log.id} last updated by {log.developer} on
              {'  '}
              <Moment format='YYYY-MM-DD, h:mm:ss A'>{log.date}</Moment>
            </span>
            <a href="#!" onClick={onDelete} className='secondary-content'>
              <i className="material-icons grey-text" >delete</i>
            </a>
        </div>
    </li>
  )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
}

export default connect(null, { deleteLog })(LogItem);