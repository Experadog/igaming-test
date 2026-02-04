import React from 'react';
import styled from 'styled-components';
import { Box, Container, Typography, Select, MenuItem, Button, Link, List } from '@mui/material';
import { useGeo } from '../../context/GeoContext';
import { CountryCode, GEO_DATA } from '../../constants/geoData';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import icon18 from '../../assets/icons/18-icon.svg';
import license from '../../assets/icons/license-logo-icon.svg';
import instIcon from '../../assets/images/inst-icon.png';
import tgIcon from '../../assets/images/tg-icon.png';
import xIcon from '../../assets/images/x-icon.png';
import emailIcon from '../../assets/images/email-icon.png';

const StyledFooter = styled.footer`
  width: 100%;
  padding: 60px 32px;
  background: linear-gradient(to left, rgba(6, 34, 93, 1), rgba(2, 1, 31, 1));
  color: white;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 55px;

  flex-direction: column;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.values.desktop}px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;
  }

  .footer-image {
    width: 100%;
  }
`;

export const Footer = () => {
    const { country, setCountry, config } = useGeo();

    return (
        <StyledFooter>
            <Container style={{ maxWidth: '1964px' }}>
                <FooterContent>
                    <Box sx={{
                        display: 'flex',
                        gap: { mobile: '50px', tablet: '50px', laptop: '40px', desktop: '60px' },
                        alignItems: 'center',
                        flexDirection: { mobile: 'column', desktop: 'row' }
                    }}>

                        <Box sx={{
                            maxWidth: { mobile: 0, tablet: 0, laptop: '240px', desktop: '280px' },
                            maxHeight: { mobile: 0, tablet: 0, laptop: '240px', desktop: '280px' },
                            display: { xs: 'none', desktop: 'block' }
                        }}>
                            <img
                                src={config.footerImage}
                                alt="background"
                                className='footer-image'
                                style={{ width: '100%' }}
                            />
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '20px',
                            borderRadius: '16px',
                            padding: '24px',
                            maxWidth: '390px',
                            minHeight: '360px',
                            border: `1px dashed ${config.secondaryColor}`,
                        }}>
                            <img src={config.gameLogo} alt="game logo" width={176} />
                            <Typography
                                variant="caption"
                                style={{
                                    minHeight: '80px',
                                    fontSize: '32px',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    lineHeight: '40px'
                                }}
                            >
                                {config.translations.title}
                            </Typography>
                            <Typography
                                variant="caption"
                                style={{
                                    minHeight: '44px',
                                    color: 'rgba(186, 186, 186, 1)',
                                    fontSize: '16px',
                                    fontWeight: '590',
                                    lineHeight: '22px'
                                }}
                            >
                                {config.translations.description}
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    width: '250px',
                                    height: '56px',
                                    padding: '17px 59px',
                                    borderRadius: '12px',
                                    fontSize: '16px',
                                    textTransform: 'capitalize',
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0,
                                    background: `linear-gradient(to right, ${config.primaryColor}, ${config.secondaryColor})`
                                }}
                            >
                                <FileDownloadOutlinedIcon fontSize='small' style={{ marginRight: '8px' }} />
                                {config.translations.buttonInstall}
                            </Button>
                        </Box>

                        <Box sx={{
                            display: { xs: 'none', desktop: 'flex' },
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 2,
                            maxWidth: '357px'

                        }}>
                            <Box style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <img src={icon18} alt="18+ icon" width={58} />
                                <Typography sx={{ color: 'rgba(251, 251, 251, 0.7)' }} variant="h6">{config.translations.ageControl}</Typography>
                            </Box>

                            <Box style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <img src={license} alt="license" width={58} />
                                <Typography sx={{ color: 'rgba(251, 251, 251, 0.7)' }} variant="h6">
                                    {config.translations.license}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', desktop: 'flex-end' },
                        justifyContent: 'space-between',
                        gap: { xs: '55px', desktop: '108px' },
                        paddingTop: { laptop: '0', desktop: '40px' },
                    }}>
                        <Select
                            value={country}
                            onChange={(e) => setCountry(e.target.value as CountryCode)}
                            size="small"
                            sx={{
                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                minWidth: '290px',
                                maxWidth: '290px',
                                color: 'white',
                            }}
                        >
                            {(Object.keys(GEO_DATA) as CountryCode[]).map((code) => (
                                <MenuItem key={code} value={code}>
                                    {GEO_DATA[code].flag} {GEO_DATA[code].nativeName}
                                </MenuItem>
                            ))}
                        </Select>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <Typography
                                sx={{
                                    textAlign: { mobile: 'center', desktop: 'end' }
                                }}
                            >
                                {config.translations.socials}
                            </Typography>
                            <List sx={{
                                display: 'flex',
                                aligItems: 'center',
                                justifyContent: { mobile: 'center', desktop: 'flex-start' },
                                gap: '4px'

                            }}>
                                <Link href="#">
                                    <img src={instIcon} alt="instagram" />
                                </Link>
                                <Link href="#">
                                    <img src={tgIcon} alt="telegram" />
                                </Link>
                                <Link href="#">
                                    <img src={xIcon} alt="x" />
                                </Link>
                                <Link href="#">
                                    <img src={emailIcon} alt="email" />
                                </Link>
                            </List>
                        </Box>
                        <Box sx={{
                            display: { mobile: 'flex', desktop: 'none' },
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '24px',
                            maxWidth: '598px',
                            width: '100%',
                            flexDirection: { xs: 'column', tablet: 'row' },
                        }}>
                            <Box style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '12px',
                                minWidth: '287px'
                            }}>
                                <img src={icon18} alt="18+ icon" width={58} />
                                <Typography
                                    sx={{
                                        color: 'rgba(251, 251, 251, 0.7)',
                                        textAlign: 'center',
                                        marginBottom: { xs: '24px', tablet: '0' }
                                    }}
                                    variant="h6">{config.translations.ageControl}
                                </Typography>
                            </Box>

                            <Box style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <img src={license} alt="license" width={58} />
                                <Typography sx={{ color: 'rgba(251, 251, 251, 0.7)', maxWidth: '287px', textAlign: 'center' }} variant="h6">
                                    {config.translations.license}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </FooterContent>
            </Container>
        </StyledFooter>
    );
};